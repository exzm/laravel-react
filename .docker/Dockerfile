FROM php:7.4-fpm

# Arguments defined in docker-compose.yml
ARG user
ARG uid

RUN apt-get update && apt-get upgrade -y

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y \
    libxml2-dev \
    build-essential \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libpng-dev \
    libwebp-dev \
    curl \
    libcurl4 \
    libcurl4-openssl-dev \
    zlib1g-dev \
    libicu-dev \
    libmagickwand-dev \
    unzip \
    libzip-dev \
    zip \
    git \
    libpq-dev \
    procps \
    && docker-php-ext-install soap \
    && docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-configure pgsql --with-pgsql=/usr/local/pgsql \
    && docker-php-ext-configure intl \
    && docker-php-ext-configure zip \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install -j$(nproc) opcache \
    && docker-php-ext-install -j$(nproc) pdo \
    && docker-php-ext-install -j$(nproc) intl \
    && docker-php-ext-install -j$(nproc) zip \
    && docker-php-ext-install -j$(nproc) pgsql \
    && docker-php-ext-install -j$(nproc) pdo_pgsql \
    && docker-php-ext-install -j$(nproc) sockets \
    && apt-get -y install gcc make autoconf libc-dev pkg-config \
    && apt-get -y install zlib1g-dev \
    && apt-get clean && apt-get autoremove -y

ADD ./ /app
WORKDIR /app

RUN useradd -G www-data,root -u $uid -d /app $user

RUN curl -sS https://getcomposer.org/installer | php \
    && php composer.phar global require hirak/prestissimo --no-plugins --no-scripts

RUN php composer.phar install --optimize-autoloader

USER $user
