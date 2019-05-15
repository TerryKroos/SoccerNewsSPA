export const getArticles = () => {
    return fetch("/blogs", {

        headers: new Headers({ 'content-type': 'application/json' }),

    })
        .catch(err => Promise.reject({ code: 'network', err })).then(
            response => {
             
                if (response.ok) {

                    return response.json();
                }
                return Promise.reject({ code: 'Server Error', err: response.statusText });
            }
        );

};
export const getArticleDetails = (title) => {
   
    return fetch(`/blogposts?blogposttitle=${title}`, {

        headers: new Headers({ 'content-type': 'application/json' }),

    })
        .catch(err => Promise.reject({ code: 'network', err })).then(
            response => {
          
                if (response.ok) {

                    return response.json();
                }
                return Promise.reject({ code: 'There is something wrong', err: response.statusText });
            }
        );

};
export const postLikes = (blogposttitle,liked) => {
    return fetch(`/blogposts/likes?blogposttitle=${blogposttitle}&liked=${liked}`, {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({blogposttitle,liked})
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject({ code: 'error', err: response.statusText });
        });
};
export const getLikes = (title) => {
   
    return fetch(`/blogposts/likes?blogposttitle=${title}`, {

        headers: new Headers({ 'content-type': 'application/json' }),

    })
        .catch(err => Promise.reject({ code: 'network', err })).then(
            response => {
             
                if (response.ok) {

                    return response.json();
                }
                return Promise.reject({ code: 'There is something wrong', err: response.statusText });
            }
        );

};
export const postComment=(name,comment,title)=>{
    return fetch(`/comments`, {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({name,comment,title})
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject({ code: 'error', err: response.statusText });
        });
}

