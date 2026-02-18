const Support = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="display-5 fw-bold mb-4">Support Our Mission</h2>
          <p className="lead text-muted mb-5">
            This project is part of a wider initiative to promote healthy lifestyles 
            and critical thinking among youth. Your support helps us keep building 
            tools that empower the next generation.
          </p>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 p-4 border-primary">
                <h5>Donate</h5>
                <p className="small">Help fund future development and youth workshops.</p>
                <button className="btn btn-primary mt-auto">Go to Payment</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 p-4 border-dark">
                <h5>Spread the Word</h5>
                <p className="small">Share this tool with your community and friends.</p>
                <button className="btn btn-dark mt-auto">Share Link</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
