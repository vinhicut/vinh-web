import React from "react";
import './Demo.scss'
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>>>hanhdleOnClickDelete: ', job)
        this.props.deleteAJob(job)
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJob = true' : 'showJob == false';
        console.log('>>>check conditional:', check)
        return (

            <>
                {showJobs === false ?
                    <div>
                        <button style={{ color: 'red' }}
                            onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></><span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )

                                })
                            }

                        </div>
                        <button onClick={() => this.handleShowHide()}>Hide</button>

                    </>}
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props;

//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )
//                         }

//                     })
//                 }

//             </div>


//         </>
//     )
// }


export default ChildComponent;

