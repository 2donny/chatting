function dateToString(dt) {
    let year = dt.getFullYear();
    let month = (dt.getMonth() + 1).toString().padStart(2, '0');
    let date = dt.getDate().toString().padStart(2, '0');
    let hour = dt.getHours().toString().padStart(2, '0');
    let minute = dt.getMinutes().toString().padStart(2, '0');
    let seconds = dt.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${date} ${hour}:${minute}:${seconds}`;
}

function warnEmptyComment() {
    return alert('Submit a comment!');
}

function submitComment() {
    const newCommentEL = document.getElementById('new-comment');
    const newComment = newCommentEL.value.trim();

    if(newComment) {
        const dateEL = document.createElement('div');
        dateEL.classList.add('comment-date');
        dateEL.innerText = dateToString(new Date());

        const contentEL = document.createElement('div');
        contentEL.classList.add('comment-content');
        contentEL.innerText = newComment;

        const commentEL = document.createElement('div');
        commentEL.classList.add('comment-row');
        commentEL.appendChild(dateEL);
        commentEL.appendChild(contentEL);

        document.getElementById('comments').appendChild(commentEL);

        newCommentEL.value = "";

        const countEL = document.getElementById('comments-count');
        const count = countEL.innerText;
        countEL.innerText = parseInt(count) + 1;
    } 
    else {
         warnEmptyComment();
    }
}
