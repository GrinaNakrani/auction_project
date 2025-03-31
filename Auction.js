const AuctionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
   
    },
    img : {
        type: String,
        required: false
    },
    
        Timestamps: true            
    
});

const AuctionModel = mongoose.model('Auction', AuctionSchema);
module.exports = AuctionModel;