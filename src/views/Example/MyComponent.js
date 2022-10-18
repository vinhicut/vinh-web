import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {

    state = {

        arrJobs: [

            { id: 'abcJob1', title: 'Developer', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' }

        ]

    }
    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        // let currenJobs = this.state.arrJob;
        // currenJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            //arrJob: currenJobs
        })

    }

    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run didupdate: ', 'prev state: ', prevState, 'current state: ', this.state)
    }
    componentDidMount() {
        console.log('>>> run component did mount')
    }

    render() {
        console.log('>>> call render: ', this.state)


        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} //Không cần đóng mở ngoặc vì đây là function input dau vao
                />

                <ChildComponent

                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />

            </>
        )
    }
}
export default MyComponent;

