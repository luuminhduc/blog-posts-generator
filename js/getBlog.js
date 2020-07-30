import {sliceData} from './sliceData.js';
export function getBlog(current, blogList, divideNumber) {
    let blogArr;
    let start;
    let end;
    if(current == 1) {
        start = current - 1;
        end = start + 10;
        blogArr = sliceData(blogList, start, end);
    }else if(current == blogList.length / divideNumber){
        start = (current - 1) * 10;
        end = blogList.length;
        blogArr = sliceData(blogList, start, end);
    }else{
        start = (current - 1) * 10;
        end = start + 10;
        console.log(start, end);
        blogArr = sliceData(blogList, start, end);
    }
    return blogArr;
}