FROM rust:latest

# View app name in Cargo.toml
ARG APP_NAME=api

WORKDIR /app

COPY . .
RUN cargo build --locked --release
RUN cp ./target/release/$APP_NAME /bin/server

EXPOSE 8080
CMD ["/bin/server"]