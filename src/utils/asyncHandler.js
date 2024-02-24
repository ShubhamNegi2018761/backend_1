const asyncHandler=(requesHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requesHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}

// const asyncHandler=()=>{}

// const asyncHandler=(func)=>{async ()=>{}}

// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code||5000).json({
//             success:false,
//             message:error.message
//         })
//     }
// }