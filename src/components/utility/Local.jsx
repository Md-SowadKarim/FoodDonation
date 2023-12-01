


const getStoredJob=()=>{
    const job=localStorage.getItem("donate")
    if(job){
        return JSON.parse(job)
    }else{
        return []
    }
}

const savedJob=(id)=>{
    const jobs=getStoredJob()
    const exist=jobs.find(jobId=> jobId.id === id.id)
    if(!exist){
        jobs.push(id)
        localStorage.setItem('donate', JSON.stringify(jobs))
     
    }else{
        alert("already selected")
       
        
    }
    
}

export{getStoredJob,savedJob}