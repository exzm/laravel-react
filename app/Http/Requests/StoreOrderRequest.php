<?php

namespace App\Http\Requests;

use App\Models\Tariff;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\JsonResponse;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     * @todo create rule class for tariff
     */
    public function rules(): array
    {
        $tariff = $this->get('tariff');

        return [
            'name'          => 'required|max:255',
            'phone'         => 'required|numeric|digits:11|starts_with:8',
            'tariff'        => 'required|exists:App\Models\Tariff,id',
            'address'       => 'required|max:512',
            'delivery_time' => [
                'required',
                'date_format:U',
                'after_or_equal:today',
                /**
                 * Check valid delivery day for selected tariff @todo move to rule class
                 */
                function (string $attribute, string $value, callable $fail) use ($tariff) {
                    $tariff = Tariff::findOrFail($tariff);
                    $date = date('w', (int)$value);
                    if (!in_array($date, $tariff->delivery_days)) {
                        $fail('Choose a correct day from the tariff.');
                    }
                },
            ],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'delivery_time.required'    => 'Delivery day field is required.',
        ];
    }

    /**
     * Handle a failed validation attempt.
     *
     * @param Validator $validator
     *
     * @return HttpResponseException
     */
    protected function failedValidation(Validator $validator): HttpResponseException
    {
        $errors = (new ValidationException($validator))->errors();

        throw new HttpResponseException(
            response()->json(['errors' => $errors], JsonResponse::HTTP_UNPROCESSABLE_ENTITY)
        );
    }
}
