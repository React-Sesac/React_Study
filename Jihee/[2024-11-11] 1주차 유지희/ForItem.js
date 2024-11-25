export default function ForItem({book}){
    let dd;
    //download 프로퍼티의 유무에 따라 태그르 분기
    if(book.download){
        dd=<dd>{book.summary}</dd>;
    }else{
        dd=<dd>{book.summary}</dd>;
    }
    return(
    <>
    <dt>
        <a href={`htttp://wikibook.o.kr/images/cover/s/${book.isbn}.jpg`}>
        {book.title}({book.price}원)
        </a>
        </dt>
        {/*생성해둔 태그 삽입*/}
        {dd}
</>
);
}