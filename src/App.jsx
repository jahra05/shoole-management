import { Route, Routes } from 'react-router-dom'
import './App.css'
import Students from './pages/Students'
import Dasboard from './pages/Dashboard'
import AddStudents from './pages/AddStudents'
import DetailStudent from './pages/DetailStudent'
import Teacher from './pages/Teacher'
import AddTeacher from './pages/AddTeacher'
import Class from './pages/Class'
import Login from './Login'
import Learning from './pages/Learning'
import Attandance from './pages/Attandance'
import NoticeBoard from './pages/NoticeBoard'
import Payment from './pages/Payment'
import Billing from './pages/Billing'
import DetailTeacher from './pages/DetailTeacher'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='dasboard' element={<Dasboard />} />
        <Route path='students' element={<Students />} />
        <Route path='add-students' element={<AddStudents />} />
        <Route path='detail-students' element={<DetailStudent />} />
        <Route path='detail-teacher' element={<DetailTeacher />} />
        <Route path='teacher' element={<Teacher />} />
        <Route path='add-teacher' element={<AddTeacher />} />
        <Route path='class' element={<Class />} />
        <Route path='learnig' element={<Learning />} />
        <Route path='attandance' element={< Attandance />} />
        <Route path='notice' element={<NoticeBoard />} />
        <Route path='payment' element={<Payment />} />
        <Route path='billing' element={<Billing />} />
      </Routes>
    </>
  )
}

export default App
