import React, {useEffect, memo} from 'react';
import { connect } from 'react-redux';
import { fetchAppsIfNeeded } from '../redux/actions'
import Card from './card'

//--------------------------
// Main component
//--------------------------
const App = memo((props)=>{
    useEffect(()=>{
        const {dispatch} = props;
        dispatch(fetchAppsIfNeeded())
    },[]);

    const { isFetching, apps } = props;
    const totalapps = apps.length;
    return (
        <>
          {isFetching && totalapps === 0 && <h2>Loading...</h2>}
          {!isFetching && totalapps === 0 && <h2>Empty.</h2>}
          <Card apps={apps} totalapps={totalapps} />
        </>
     );
});

const mapStateToProps = ({ isFetching, apps })=>({
    isFetching,
    apps
});

export default connect(mapStateToProps)(App);