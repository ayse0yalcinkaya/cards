

// export const Course = (props) => {
//     return (
//         <div>Course</div>
//     )
// }
//ffc - functional component
function Course2({ title, description }) {
    // console.log(props);
    console.log({title, description});

    // const title = props.title;
    // const description = props.description;

    //const { title, description } = props;
    return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
        </div>

    );
}

export default Course2;
