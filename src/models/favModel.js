import mongoose  from "mongoose";

const favSchema= new mongoose.Schema(
    {
        favoritos:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }
    ]
    },
    {
        timestamps:true
    }
);

export const favModel=mongoose.model('Fav',favSchema)