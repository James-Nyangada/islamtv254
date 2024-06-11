

export default {
    name: 'course',
    type: 'document',
    title: 'Course',
    fields: [
        {
        name: 'title',
        type: 'string',
        title: 'Title',
        },
        {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
        },
        },
        {
        name: 'thumbnail',
        title: 'Thumb Nail',
        type: 'image',
        },
        {
        name: 'userThumb',
        title: 'User Thumb',
        type: 'image',
        },
        {
        name: 'userName',
        title: 'User Name',
        type: 'string',
        },
        {
            name: 'description',
            title: 'Course Description',
            type: 'array',
            of: [
                {
                type: 'block',
                }
            ],
        },
        
    ],
}