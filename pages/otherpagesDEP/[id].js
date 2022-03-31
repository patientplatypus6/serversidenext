import { useRouter } from 'next/router'

const User = ({response}) => {
  const router = useRouter()
  const { id } = router.query

  console.log('value of params on page load: ', response)

  return (
    <div>
        <p>User: {id}</p>
        <div>
            apicall: {JSON.stringify(response)}
        </div>
    </div>
  )
}

export async function getStaticPaths(){
    return { paths: [], fallback: true }
}

export async function postData(url, data){
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

export async function getStaticProps({params}) {
    // const postData = getPostData(params.id)
    console.log('inside getStaticProps')
    console.log('value of params: ', params)
    //fetch post request localhost:3001/api/echo here
    //promise preferable...
    var url = 'http://localhost:3001/api/echo'
    var data = {id: params.id}
    var returnval = {}
    await postData(url, data)
    .then(response=>{
        console.log('value of response: ', response)
        returnval = response;
    })
    console.log('value of returnval: ', returnval)
    return {
        props:{
            response: returnval
        }
    }


}

export default User;