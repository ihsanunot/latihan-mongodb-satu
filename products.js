const mongoose = require('mongoose');


// Connect
mongoose.connect('mongodb://127.0.0.1:27017/ShopApp')
    .then((result) => {
        console.log("Terhubung ke MongoDB ShopApp");
    }).catch((err) => {
        console.log("Error/Gagal Konek")
    })

const productSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true,
        min: 0
    },
    color: {
        type: Number,
        required: true
    },
    // array
    size:[{
        type: String,
        required: true
    }],
    description:{
        type: String,
        required: true,
        maxLength: 150
    },
    condition: {
        type: String,
        required: true,
        enum: ['baru','bekas'],
        default: 'baru'
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    // objek
    availability: {
        online : {
            type: Boolean,
            required: true,
        },
        offline: {
            type: Boolean,
            required: true,
        }  
    }

})

const Product = mongoose.model('Product', productSchema)

const tshirt = new Product({
    "name": "Kemeja Flanel",
    "brand": "Hollister",
    "price": 750000,
    "color": "biru muda",
    "size": ["S", "M", "L"],
    "description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
    "condition": "baru",
    "stock": 25,
    "availability": {
        "online": true,
        "offline": true
    }
})

tshirt.save().then((result) => {
    console.log('sukses di save')
}).catch((err) => {
    console.log('error bosque produk mu')
})