export const getAllUsers = async () => {
    try{
      let response = await fetch(`https://rickandmortyapi.com/api/character/?page=18`)
        return(await response.json())
    }catch(err){
      console.error('Error in getAllUsers',err);
      throw new Error('Error in getAllUsers');
    }
}
