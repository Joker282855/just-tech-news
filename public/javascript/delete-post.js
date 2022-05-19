async function deleteFromHandler(event) {

    event.preventDefualt(event);

    const title = document.querySelector('input[name="post-title"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length-1
    ];

    if (title) {

        const response = await fetch('/api/posts/:id', {

            method: 'DELETE',

            body: JSON.stringify({

                post_id,

                title

            }),

            headers: {
                'Content-Type': 'application/json'
            }

        });

        if (response.ok) {
            document.location.replace()
        }
    } 

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);