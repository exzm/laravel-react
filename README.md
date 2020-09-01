# Example order page

## use
1. copy .env.example to .env
2. add test.local to hosts
3. docker-compose up
4. docker-compose exec php php artisan migrate --seed
5. docker-compose exec php php artisan key:generate
6. **http://test.local:8080**
