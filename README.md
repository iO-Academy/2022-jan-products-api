
# Leafy Sea Dragon Products RESTful API
!['Leafy Sea Dragon'](https://ronbeckdesigns.com/wp/wp-content/uploads/2019/04/Leafy-Sea-Dragon-Photo_-NaSser-Alomairi-1500-1000.jpg)

Welcome to our RESTful API where you can find all of your stock management needs in one place.

Authors: Luke Grayland, Gabriel Rowan, and Samuel Shanagher

## Requirements

``npm init``			
create package.json

``npm i express``			
installs the express framework

``npm i promise-mysql``		
provides ability to connect to the database connection

``npm i jest --save-dev``		
creates the test environment locally

<details>  
<summary>Run API Locally</summary>  
<h3>Local Setup</h3>
<p>
Clone this repo:

```bash
git clone git@github.com:iO-Academy/2022-jan-products-api.git
```

Once cloned, first install the database stored in ``/lsd_products.sql``. Create a database named `lsd_products`, then open the SQL file in your MySQL GUI.

*You will need to amend the database`user` and `password` to match that of your MySQL DB in the `DbService.js` file*

After installing the database, install the vendor code by running the following globally in your command line:

```javascript
npm install nodemon -g
```
OR you may need to use
```javascript
sudo npm install nodemon -g
```
To run the application locally, ``cd`` into the project root then:

```javascript
nodemon start.js
```

**Do not close this terminal tab, it is a running process.**

The API will now be accessible at ``http://localhost:3000/``.

That is it, now you can enjoy managing your stock items.
</p>  


</details>  



## API Documentation
This API supports the following HTTP requests:
### Add Products
<details>
<h3>Route</h3>
<h5>URL:</h5> 	

``/products``

<h5>Method:</h5>

``POST``
<h5>URL Params:</h5>

``N/A``
<h5>Optional URL Params:</h5>

``N/A``
<h5>Example URL:</h5>

``/products``
<h5>Required POST Body Data:</h5>

``SKU, name, price, stock_level``		
<h3>Success Response</h3>
<h5>Code:</h5>

``201``
<h5>Response:</h5>


	​​{

		"success": true,

		"message": "Success",

		"status": 201,

		"data": {

			"fieldCount": 0,

			"affectedRows": 1,

			"insertId": 14,

			"serverStatus": 2,

			"warningCount": 0,

			"message": "",

			"protocol41": true,

			"changedRows": 0

		}

	}

<h3>Error Response</h3>
<h5>Code:</h5>

``500``
<h5>Response:</h5>
Response:

	{

		"success": false,

		"message": "Error",

		"status": 500,

		"data": []

	}
</details>

### View All Products
<details>
<h3>Route</h3>
<h5>URL:</h5> 	

``/products``

<h5>Method:</h5>

``GET``
<h5>URL Params:</h5>

``N/A``

<h5>Optional URL Params:</h5>

``N/A``

<h5>Example URL:</h5>

``/products``
<h5>Required POST Body Data:</h5>

``SKU, name, price, stock_level``		
<h3>Success Response</h3>
<h5>Code:</h5>

``200``
<h5>Response:</h5>


	{

		"success": true,

		"message": "Success",

		"status": 200,

		"data": [
		
			{
				"name": "Crocs Pink S9",

				"price": 50.5,

				"SKU": "CRO-9-PINK"
			}
		]
	}

<h3>Error Response</h3>
<h5>Code:</h5>

``500``
<h5>Response:</h5>

	{

		"success": false,

		"message": "Error",

		"status": 500,

		"data": []

	}
</details>

### View Single Products

<details>
<h3>Route</h3>
<h5>URL:</h5> 	

``/products``

<h5>Method:</h5>

``GET``
<h5>URL Params:</h5>

``N/A``
<h5>Optional URL Params:</h5>

``/:SKU``
<h5>Example URL:</h5>

``/products/CRO-9-PIN``
<h5>Required GET parameters:</h5>

``SKU``		
<h3>Success Response</h3>
<h5>Code:</h5>

``200``
<h5>Response:</h5>


	{

		"success": true,

		"message": "Success",

		"status": 200,

		"data": [

			{

				"SKU": "CRO-9-PIN",

				"name": "Crocs Pink S9",

				"price": 50.05,

				"stock_level": 7

			}

		]

	}

<h3>Error Response</h3>
<h5>Code:</h5>

``500``
<h5>Response:</h5>

	{

		"success": false,

		"message": "Error",

		"status": 500,

		"data": []

	}
</details>

### Delete Products

<details>
<h3>Route</h3>
<h5>URL:</h5> 	

``/products/{SKU}``

<h5>Method:</h5>

``DELETE``
<h5>URL Params:</h5>

``/:SKU``
<h5>Optional URL Params:</h5>

``N/A``
<h5>Example URL:</h5>

``/products/CRO-9-PIN``
<h5>Required DELETE parameters:</h5>

``SKU``		
<h3>Success Response</h3>
<h5>Code:</h5>

``204``
<h5>Response:</h5>


	{

		"success": true,

		"message": "Success",

		"status": 204,

		"data": {

			"fieldCount": 0,

			"affectedRows": 1,

			"insertId": 0,

			"serverStatus": 2,

			"warningCount": 0,

			"message": "",

			"protocol41": true,

			"changedRows": 0

		}

	}

<h3>Error Response</h3>
<h5>Code:</h5>

``500``
<h5>Response:</h5>

	{

		"success": false,

		"message": "Error",

		"status": 500,

		"data": []

	}
</details>

### Edit Products

<details>
<h3>Route</h3>
<h5>URL:</h5> 	

``/products/{SKU}``

<h5>Method:</h5>

``PUT``
<h5>URL Params:</h5>

``/:SKU``
<h5>Optional URL Params:</h5>

``N/A``
<h5>Example URL:</h5>

``/products/CRO-9-PIN``
<h5>Required PUT parameters:</h5>

``SKU``

<h5>Optional PUT parameters:</h5>

``name, price, stock_level``
<h3>Success Response</h3>
<h5>Code:</h5>

``201``
<h5>Response:</h5>


	{

		"success": true,

		"message": "Success",

		"status": 201,

		"data": {

			"fieldCount": 0,

			"affectedRows": 1,

			"insertId": 0,

			"serverStatus": 2,

			"warningCount": 0,

			"message": "(Rows matched: 1 Changed: 1 Warnings: 0",

			"protocol41": true,

			"changedRows": 1

		}

	}

<h3>Error Response</h3>
<h5>Code:</h5>

``500``
<h5>Response:</h5>

	{

		"success": false,

		"message": "Error",

		"status": 500,

		"data": []

	}
</details>

#### Success Response
#### Error Response

### Update Stock Level

#### Success Response
#### Error Response