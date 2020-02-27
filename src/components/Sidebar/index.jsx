import React from 'react';
import { connect } from 'react-redux';
// import { Container } from './styles';
import  CourseAction from '../../store/actions/course.js';
const Sidebar = ({modules, dispatch}) => (
    <aside>
        {modules.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>{lesson.title}
                        <button onClick={() => dispatch(CourseAction(module,lesson))}>Selecionar</button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
);

const mapStateToProps = state => ({
  modules : state.course.modules
});


export default connect(mapStateToProps)(Sidebar);
