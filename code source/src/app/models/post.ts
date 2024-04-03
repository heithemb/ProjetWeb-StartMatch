export class Post {

    picture:string;
    person_name:string;
    person_status:string;
    post_date:string;
    status:string;
    text_content:string;
    media_content?:string;
        constructor(picture:string,person_name:string,person_status:string,
            post_date:string,
            status:string,
            text_content:string,
            media_content?:string)
        {
        this.picture=picture;
        this.person_name=person_name;
        this.person_status=person_status;
        this.post_date=post_date;
        this.status=status;
        this.text_content=text_content;
        this.media_content=media_content;
    
        }
    }
