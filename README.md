# book-Sharing-Platform

# API :

## USER

* Get all the registered user **[get Request]**

> http://localhost:8000/api/v1/user/

* Get user by ID **[get Request]**

> http://localhost:8000/api/v1/user/**id**

* Create User **[post Request]**

> http://localhost:8000/api/v1/user/

To create user, request with this filled in body

>
	"email": "",
	"password" : "",
	"branch" : "",
	"semester": ,
	"enrollmentNo" :


* Update User  **[patch Request]**

> http://localhost:8000/api/v1/user/**id**

To update, request with updated filled in body

>
	"email": "",
	"password" : "",
	"branch" : "",
	"semester": ,
	"enrollmentNo" :


* Delete User **[delete Request]**

> http://localhost:8000/api/v1/user/**id**

---


## BOOK


* Get all the book **[get Request]**

> http://localhost:8000/api/v1/book

 To filter book by book type

> http://localhost:8000/api/v1/book?bookType=**value**

* Get book by ID **[get Request]**

> http://localhost:8000/api/v1/book/**id**

* Create Book **[post Request]**

> http://localhost:8000/api/v1/book/

To create book, request with this filled in body

>
	"category" : "",
	"bookName" : "",
	"bookType" : "",
	"isAvailable" : "",
	"tag" : [""]


* Update book  **[patch Request]**

> http://localhost:8000/api/v1/book/**id**

To update, request with updated filled in body

>
	"category" : "",
	"bookName" : "",
	"bookType" : "",
	"isAvailable" : "",
	"tag" : [""]


* Delete Book **[delete Request]**

> http://localhost:8000/api/v1/book/**id**

---


## BORROW
