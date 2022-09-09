import Header from '../Header'
import Main from '../Main';
function Home({transactionsLog, logado, convertToBRL }){
    return(
        <>
          <Header switchPage={logado}/>
          <Main transactionsLog={transactionsLog} convertToBRL={convertToBRL} />
        </>
    )
}

export default Home;