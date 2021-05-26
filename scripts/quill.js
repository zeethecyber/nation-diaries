var toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, false] }],
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block','link'],
    ['image'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'align': [] }],
    ];
    
    var quill = new Quill('#editor', {
    modules: {
    toolbar: toolbarOptions
    },
    placeholder: 'Start writing an epic content',
    theme: 'snow'
    });