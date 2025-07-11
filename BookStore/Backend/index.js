const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

//logout

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the backend demo");
});

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://Book-Store:dc1WFlPgM15e8MXR@cluster0.dtiadaw.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const bookCollection = client.db("BookStore").collection("bookCollection");
    const wishlistCollection = client.db("BookStore").collection("wishlistCollection");
    const cartCollection = client.db("BookStore").collection("cartCollection");

    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    });

    app.get("/get-books", async (req, res) => {
      const books = await bookCollection.find();
      const result = await books.toArray();
      res.send(result);
    });

    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);

      const updateBookData = req.body;

      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    app.delete("/books/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.deleteOne(filter);

      res.send(result);
    });

    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollection.findOne(filter);
      res.send(result);
    });

    app.post("/add-to-cart/:id", async (req, res) => {
      const bookId = req.params.id;
      try {
        const book = await bookCollection.findOne({
          _id: new ObjectId(bookId),
        });
        if (!book) {
          return res.status(404).send("Book not found");
        }

        const cartItem = {
          bookId: book._id,
          authorName: book.authorName,
          bookTitle: book.bookTitle,
          category: book.category,
          bookDescription: book.bookDescription,
          imageURL: book.imageURL,
          bookPDFLink: book.bookPDFLink,
          price: book.price,
          quantity: 1,
        };

        const result = await cartCollection.insertOne(cartItem);
        //res.send(result);
        res.status(201).json(cartItem);
      } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).send("An error occurred while adding to the cart.");
      }
    });

    app.delete("/cart/:id", async (req, res) => {
      try {
        const cartItemId = req.params.id;
        const result = await cartCollection.deleteOne({
          _id: new ObjectId(cartItemId),
        });

        if (result.deletedCount === 1) {
          res
            .status(200)
            .send({ message: "Item removed from cart successfully" });
        } else {
          res.status(404).send({ message: "Item not found in cart" });
        }
      } catch (error) {
        console.error("Error removing item from cart:", error);
        res.status(500).send({ message: "Internal server error" });
      }
    });

    app.put("/cart/increment/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const result = await cartCollection.updateOne(
          { _id: new ObjectId(id) },
          { $inc: { quantity: 1 } }
        );
        res.json(result);
      } catch (error) {
        res.status(500).send(error.message);
      }
    });

    app.put("/cart/decrement/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const result = await cartCollection.updateOne(
          { _id: new ObjectId(id) },
          { $inc: { quantity: -1 } }
        );
        res.json(result);
      } catch (error) {
        res.status(500).send(error.message);
      }
    });

    app.get("/cart", async (req, res) => {
      const cartItems = await cartCollection.find().toArray();
      res.send(cartItems);
    });

    app.post("/add-to-wishlist/:id", async (req, res) => {
      const bookId = req.params.id;
      try {
        const book = await bookCollection.findOne({
          _id: new ObjectId(bookId),
        });
        if (!book) {
          return res.status(404).send("Book not found");
        }

        const wishlistItem = {
          bookId: book._id,
          authorName: book.authorName,
          bookTitle: book.bookTitle,
          category: book.category,
          bookDescription: book.bookDescription,
          imageURL: book.imageURL,
          bookPDFLink: book.bookPDFLink,
          price: book.price,
        };

        const result = await wishlistCollection.insertOne(wishlistItem);
        res.status(201).json(wishlistItem);
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        res.status(500).send("An error occurred while adding to the wishlist.");
      }
    });

    app.delete("/wishlist/:id", async (req, res) => {
      try {
        const wishlistItemId = req.params.id;
        const result = await wishlistCollection.deleteOne({
          _id: new ObjectId(wishlistItemId),
        });

        if (result.deletedCount === 1) {
          res
            .status(200)
            .send({ message: "Item removed from wishlist successfully" });
        } else {
          res.status(404).send({ message: "Item not found in wishlist" });
        }
      } catch (error) {
        res.status(500).send({ message: "Internal server error" });
      }
    });

    app.get("/wishlist", async (req, res) => {
      const wishlistItems = await wishlistCollection.find().toArray();
      res.send(wishlistItems);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("Server is listening on Port 5000");
});
