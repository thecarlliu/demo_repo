* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
  	Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
  	A promise is the eventual result of an asynchronous operation. It is a placeholder into which the successful result value or reason for failure will materilize.

  	- Answer: What advantages does it offer?
Basically Sequelize.js has good support for database synchronization, eager loading, associations, transactions and migrations
  	- Answer: How do I install it? How do I incorporate it into my app?
  	https://www.npmjs.com/package/sequelize

  	- Answer: What the heck is a Sequelize model? What role will it play?
  	A Model represents a table in the database. Sometimes you might also see it referred to as model, or simply as factory. This class should not be instantiated directly, it is created using sequelize.define , and already created models can be loaded using sequelize.import.
  	

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```