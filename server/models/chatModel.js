import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required:true,
      },
      users: Array,
      sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "users",
        required:true,
      },
    },
        { timestamps: true, }
    );
  
  export default mongoose.model('Message', messageSchema);