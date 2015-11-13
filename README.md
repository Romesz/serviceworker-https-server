##service worker with node https server

###Background:

In order to use Service Workers to cache a website we need HTTPS server.
The repo contains a Node HTTPS server and a basic Service Workers useage.


###How to use:

* npm install
* Create keys for HTTPS
  * Setps to create key and csr files (need to put those files to ./httpskeys)
    * openssl genrsa -des3 -out server.key 1024
    * openssl req -new -key server.key -out server.csr
    * [ If there is an error with OpenSSL set the path like : set OPENSSL_CONF=[path-to-OpenSSL-install-dir]\bin\openssl.cfg ]
    * openssl rsa -in server.org -out server.key
    * openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
* node index.js
* type localhost in your browser


###Resources:

https://jakearchibald.com/2014/using-serviceworker-today/

http://www.sitepoint.com/how-to-use-ssltls-with-node-js/

http://www.akadia.com/services/ssh_test_certificate.html

http://www.html5rocks.com/en/tutorials/service-worker/introduction/#toc-how