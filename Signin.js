const SigninSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    Timestamps: true            
}
);
const SigninModel = mongoose.model('Signin', SigninSchema);
module.exports = SigninModel;