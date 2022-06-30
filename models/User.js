const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    // first: String,
    // last: String,
    // age: Number,
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //  Must match a valid email address (look into Mondoose's matching validation)
    },
    // Array of _id values referencing thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
      // Array of _id values referencing user model (self reference)
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual popterty that gets the friend count of user
userSchema
  .virtual('friendCount')
  // Getter
  .get(function() {
    return this.friends.length
  })

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;


// Create a virtual property `fullName` that gets and sets the user's full name
// userSchema
//   .virtual('fullName')
//   // Getter
//   .get(function () {
//     return `${this.first} ${this.last}`;
//   })
//   // Setter to set the first and last name
//   .set(function (v) {
//     const first = v.split(' ')[0];
//     const last = v.split(' ')[1];
//     this.set({ first, last });
//   });


