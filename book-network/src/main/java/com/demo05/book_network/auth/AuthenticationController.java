package com.demo05.book_network.auth;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

// @RestController
// @RequestMapping("auth")
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {
    // private final AuthenticationService service;

    // @PostMapping("/register")
    // @ResponseStatus(HttpStatus.ACCEPTED)
    // public ResponseEntity<?> register(@RequestBody @Valid RegistrationRequest request) throws MessagingException {
    //     service.register(request);
    //     return ResponseEntity.accepted().build();
    // }

    // @PostMapping("/authenticate")
    // public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody @Valid AuthenticationRequest request)
    //         throws MessagingException {
    //     return ResponseEntity.ok(service.authenticate(request));
    // }

    // @GetMapping("/activate-account") 
    // public void confirm(@RequestParam String token) throws MessagingException {
    //     service.activateAccount(token);
    // }
}
