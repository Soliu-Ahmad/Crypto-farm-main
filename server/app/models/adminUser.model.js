
    const bcrypt = require("bcrypt")
    module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            firstname: String,
            lastname: String,
            email: String,
            password: String,
            phoneNumber: String,
            address: String,
            photoUrl: String,
            status: Boolean,
            createdAt: Date
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    schema.pre("save", function (next) {
        const user = this
      
        if (this.isModified("password") || this.isNew) {
          bcrypt.genSalt(10, function (saltError, salt) {
            if (saltError) {
              return next(saltError)
            } else {
              bcrypt.hash(user.password, salt, function(hashError, hash) {
                if (hashError) {
                  return next(hashError)
                }
      
                user.password = hash
                next()
              })
            }
          })
        } else {
          return next()
        }
    })

    const Adminuser = mongoose.model("adminUser", schema);
    return Adminuser;
};
