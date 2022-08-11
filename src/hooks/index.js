import { useState, useEffect } from 'react'
import firebase from '../firebase'

export function useTodos(){
    const [todos, setTodos] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('todos')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            setTodos(data)
        })

        return () => unsubscribe()
    }, [])

    return todos
}

export function useProjects(todos){
    const [projects, setProjects] = useState([])

    function calculateNumOfTodos(projectName, todos){
        return todos.filter( todo => todo.projectName === projectName).length
    }

    useEffect(() => {
        let unsubscribe = firebase
        .firestore()
        .collection('projects')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {

                const projectName = doc.data().name

                return {
                    id : doc.id,
                    name : projectName,
                    numOfTodos : calculateNumOfTodos(projectName, todos)
                }
            })
            setProjects(data)
        })

        return () => unsubscribe()
    }, [])

    return projects
}








/*import { useState, useEffect} from 'react'
import { collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase'

export  function useProjects(todos){              // custom hook: useTodos//
    const [projects,setProjects] = useState([]);

    function calculateNumOfTodos(projectName,todos){
        return todos.filter(todo => todo.projectName === projectName ).length
    }

    useEffect(() => {
        const  projectsCollectionsRef = collection(db, 'projects')
        getDocs(projectsCollectionsRef)
            .then(response => {
            const data = response.docs.map(doc => {
                const projectName = doc.data().name  //Grab the project name//

                return {
                    id: doc.id,           //to get the unique document id//
                    name: projectName,    //get the name of our project
                    numOfTodos: calculateNumOfTodos(projectName,todos)           //function to calculate the total num of my todos//
                }
            })
            setProjects(data)
        }).catch(error => console.log(error.message))
        return() => {projectsCollectionsRef()}
    },[])   //useEffect clean-up to avoid memory leak//
    return projects
}





export  function useTodos(){              // custom hook: useTodos//
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        const todoCollectionsRef = collection(db,'todos')
        getDocs(todoCollectionsRef)
            .then(response => {
            const data = response.docs.map(doc => {
                return {
                    id: doc.id,           //to get the unique document id//
                    ...doc.data           //to get the other data i use the spread operator 
                }
            })
            setTodos(data)
        }).catch(error => console.log(error.message))
        return () => {todoCollectionsRef()}
    },[])   //useEffect clean-up to avoid memory leak//
    return todos
}*/





