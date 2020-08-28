const claimHistory = (oldListOfClaims=[],action)=>{
    if(action.type === 'CREATE_CLAIM'){
        return [...oldListOfClaims,action.payload];
    }

    return oldListOfClaims;
}

const accounting = (prevAmount = 100, action)=>{
    if(action.type === "CREATE_POLICY"){
        return prevAmount + action.payload.amount;
    }
    else if(action.type === "CREATE_CLAIM"){
        return prevAmount - action.payload.claimAmount;
    }

    return prevAmount;
}

const policies = (oldListOfPolicies=[],action)=>{
    if(action.type === "CREATE_POLICY"){
        return [...oldListOfPolicies,action.payload.name]
    }
    else if(action.type === "DELETE_POLICY"){
        return oldListOfPolicies.filter(policy => policy !== action.payload.name)
    }

    return oldListOfPolicies;
}

module.exports = {
    claimHistory,
    accounting,
    policies
}