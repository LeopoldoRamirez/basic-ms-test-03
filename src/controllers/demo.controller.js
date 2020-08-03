

export const getAllDemos = async( request, response )=>{
    try {
        return response.json([]);
    } catch (error) {
        return response.status(500).json({msg:'error in app'});
    }
}