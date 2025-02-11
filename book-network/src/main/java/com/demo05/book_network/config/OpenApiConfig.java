package com.demo05.book_network.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
            contact = @Contact(
                name = "Doan Du",
                email = "contact@gmail.com",
                url = "http://some-url.com"
            ),
            description = "OpenApi documentation for Book Social Network",
            title = "OpenApi Specification",
            version = "1.0",
            license = @License(
                    name = "License name",
                    url = "http://some-url.com"
            ),
            termsOfService = "Terms of service"
        ),
        servers = {
            @Server(
                description = "Local ENV",
                url = "http://localhost:8088/api/v1"
            ),
            @Server(
                description = "Prob ENV",
                url = "https://book-social-network"
            )
        },
        security = {
            @SecurityRequirement(
                name = "bearerAuth"
            )
        }
)
@SecurityScheme(
    name = "bearerAuth",
    description = "JWT auth description",
    scheme = "bearer",
    type = SecuritySchemeType.HTTP,
    bearerFormat = "JWT",
    in = SecuritySchemeIn.HEADER
)
public class OpenApiConfig {

}
