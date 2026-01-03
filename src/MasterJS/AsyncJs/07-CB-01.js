

/*const getUser = (id, cbFn) => {
    setTimeout(()=>{
        //remote job: get user's name
        console.log(`Get an user name of id ${id} from db`);
        cbFn({id: id, name :"David"});
    }, 2000);
};

const getRepos = (userName, cbFn) => {
    setTimeout(()=>{
        //remote job: get user's repo by user name
        console.log(`Get repos of user ${userName} from Github`);
        cbFn(["repo1", "repo2", "repo3"]);
        console.log("after");
    }, 3000);
};

//const cbFn2 = (repos) => {
//    console.log(`user repos:`, repos);
//};

//const cbFn1 = (user) => {
//   console.log(`user data from remote: id: ${user.id}, name:${user.name}`);
//    getRepos(user.name, cbFn2);
//};

getUser(1, cbFn1); //async: 交辦
*/

console.log("before");

const getComments = (repo) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        //remote job: get user's repo by user name
            console.log(`Get repos of user ${repo}`);
            resolve(["comment1", "comment2"]);
        }, 3000);
    });
};

const getRepos = (userName) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        //remote job: get user's repo by user name
            console.log(`Get comments for repo ${userName} from Github`);
            resolve(["repo1", "repo2", "repo3"]);
        }, 3000);
    });
};

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //remote job: get user's name
            console.log(`Get an user name of id ${id} from db`);
            resolve({id: id, name :"David"});
        }, 2000);
    });
};

/*getUser(1)
    .then((user) => {
        console.log(user);
        return getRepos(user.name);
    })
    .then((repos) => {
        console.log(`user's repos:`, repos);
        return getComments(repos[0]);
    })
    .then((comments) => {
        console.log(comments);
        console.log("after");
    })
    .catch((err) => {
        console.error(err);
    });
*/

// async/await

const showComments = async () => {
    const user = await getUser(1);
    console.log(user);
    const repos = await getRepos(user.name);
    console.log(`user's repos:`, repos);
    const comments = await getComments(repos[0]);
    console.log(comments);
    console.log("after");

}

showComments();