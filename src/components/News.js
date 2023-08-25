import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "../Spinner";



export class News extends Component {
  // articles = [
  //   {
  //     "source": {
  //         "id": "the-times-of-india",
  //         "name": "The Times of India"
  //     },
  //     "author": "ET Online",
  //     "title": "How serious is the recent Covid spike in India? - Economic Times",
  //     "description": "India has reported 524 new Covid-19 cases in 24 hours after 113 days, shows Union health ministry data updated on Sunday. The spike is more prominent in Kerala , Maharashtra, Gujarat and Karnataka. The country had reported a single-day spike of over 500 in No…",
  //     "url": "https://economictimes.indiatimes.com/news/india/how-serious-is-the-recent-covid-spike-in-india/articleshow/98610967.cms",
  //     "urlToImage": "https://img.etimg.com/thumb/msid-98610909,width-1070,height-580,imgsize-53892,overlay-economictimes/photo.jpg",
  //     "publishedAt": "2023-03-13T13:33:00Z",
  //     "content": "In an ominous coincidence, India has seen a sudden uptick in Covid-19 numbers around the third anniversary of the pandemic. On March 11, 2020, the World Health Organization had declared Covid-19 a gl… [+4049 chars]"
  // },
  // {
  //     "source": {
  //         "id": null,
  //         "name": "Hindustan Times"
  //     },
  //     "author": "Parmita Uniyal",
  //     "title": "H3N2 Influenza: Signs and symptoms of severe illness to watch out for - Hindustan Times",
  //     "description": "H3N2 Influenza can cause respiratory illness in humans. Here are warning signs and symptoms that you have a severe disease and need to be hospitalised. | Health",
  //     "url": "https://www.hindustantimes.com/lifestyle/health/h3n2-influenza-signs-and-symptoms-of-severe-illness-to-watch-out-for-101678713729055.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/13/1600x900/Very-few-H3N2-patients-have-been-admitted-to-major_1678639783184_1678713877980_1678713877980.jpg",
  //     "publishedAt": "2023-03-13T13:30:50Z",
  //     "content": "H3N2 Influenza, a subtype of Influenza A virus has been spreading fast in India with around 90 cases so far and 2 deaths. The illness is said to cause fever that lasts for 3-5 days and a prolonged co… [+4774 chars]"
  // },
  // {
  //     "source": {
  //         "id": null,
  //         "name": "Hindustan Times"
  //     },
  //     "author": "PTI",
  //     "title": "Sensex, Nifty plunge to 5-month lows over contagion fears from SVB collapse - Hindustan Times",
  //     "description": "Analysts said that uncertainty over several mid and small size banks have created nervousness among global investors about the health of the US banking sector.",
  //     "url": "https://www.hindustantimes.com/business/sensex-nifty-plunge-to-5-month-lows-over-contagion-fears-from-silicon-valley-bank-collapse-101678709649023.html",
  //     "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/03/13/1600x900/sensex_1678709666304_1678709666492_1678709666492.JPG",
  //     "publishedAt": "2023-03-13T12:21:51Z",
  //     "content": "Benchmark stock indices Sensex and Nifty declined for a third day on the trot to close at five-month low levels on Monday due to a massive sell-off in banking, finance and auto stocks triggered by fe… [+4717 chars]"
  // },
  // {
  //     "source": {
  //         "id": null,
  //         "name": "The Indian Express"
  //     },
  //     "author": "The Indian Express",
  //     "title": "Can a dash of lime or a piece of orange help lower bad LDL cholesterol, reduce the risk of heart attack? Understanding health benefits of citrus fruits - The Indian Express",
  //     "description": null,
  //     "url": "https://indianexpress.com/article/health-wellness/orange-lemon-a-day-cholesterol-heart-attack-risk-8493024/",
  //     "urlToImage":null,
  //     "publishedAt": "2023-03-13T01:06:21Z",
  //     "content": null
  // }
  // ];

  static defaultProps = {

    country:'in',
    pageSize:6,
    category:'general'
    
  }

  static propTypes = {

    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
    
  }

 

   capitalizeFirstLetter=(str)=>{

    return str.charAt(0).toUpperCase()+str.slice(1);
  }



  constructor(props) {
    super(props);
    console.log("Constructor called");
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1,
    }
    document.title=`Honest News Hub-${this.capitalizeFirstLetter(this.props.category)}`
  }

  async componentDidMount() {
    console.log("component did mount");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f80dd4a259ca494f8d5f9a6e1dfc9391&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleprevpage = async () => {
    console.log("previous button clicked");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category} &apiKey=f80dd4a259ca494f8d5f9a6e1dfc9391&page={this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handlenextpage = async () => {
    console.log("next button clicked");

    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f80dd4a259ca494f8d5f9a6e1dfc9391&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center ">Honest News Hub-Top Headlines - {this.capitalizeFirstLetter(this.props.category)} </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : " "}
                  description={
                    element.description
                      ? element.description.slice(0, 100)
                      : " "
                  }
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  time={element.publishedAt}
                  source={element.source.name}

                  
                />
              </div>
            );
          })}
        </div>

        <div className="container2 d-flex justify-content-between ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handleprevpage}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.handlenextpage}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
