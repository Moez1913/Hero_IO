
import { useLoaderData, useParams } from 'react-router'


const AppDetails = () => {
    const {id}=useParams()
    const AppId=parseInt(id)
    const AppData=useLoaderData()
    const app=AppData.find(app=>app.id===AppId)
    const totalRatings = app.ratings.reduce((sum, r) => sum + r.count, 0);
     
  
  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row gap-8 items-start border-b pb-6">
        
        {/* App Image */}
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 object-cover rounded-xl shadow"
        />

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-500 mt-1">
            Developed by <span className="text-primary font-medium">{app.companyName}</span>
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-6 flex-wrap">

            <div>
              <p className="text-green-500 text-xl">⬇</p>
              <p className="text-sm text-gray-400">Downloads</p>
              <p className="font-bold text-lg">
                {(app.downloads / 1000000).toFixed(1)}M
              </p>
            </div>

            <div>
              <p className="text-orange-500 text-xl">⭐</p>
              <p className="text-sm text-gray-400">Average Ratings</p>
              <p className="font-bold text-lg">{app.ratingAvg}</p>
            </div>

            <div>
              <p className="text-purple-500 text-xl">👍</p>
              <p className="text-sm text-gray-400">Total Reviews</p>
              <p className="font-bold text-lg">
                {(app.reviews / 1000).toFixed(1)}K
              </p>
            </div>

          </div>

          {/* Install Button */}
          <button className="btn btn-success mt-6">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      {/* RATINGS SECTION */}
      <div className="mt-8">
  <h2 className="text-xl font-semibold mb-4">Ratings</h2>

  <div className="space-y-4">
    {[...app.ratings].reverse().map((rating, i) => {
      const maxValue = 12000; // fixed axis max
      const percent = (rating.count / maxValue) * 100;

      return (
        <div key={i} className="flex items-center gap-4">
          
          {/* Y-axis */}
          <span className="w-16 text-sm text-gray-500">
            {rating.name}
          </span>

          {/* Bar */}
          <div className="flex-1 bg-gray-200 h-3 rounded relative">
            <div
              className="bg-orange-500 h-4  transition-all duration-700"
              style={{ width: `${percent}%` }}
            ></div>
          </div>

        </div>
      );
    })}
  </div>

  {/* X-axis */}
  <div className="flex justify-between text-xs text-gray-400 mt-4 pl-20">
    <span>0</span>
    <span>3000</span>
    <span>6000</span>
    <span>9000</span>
    <span>12000</span>
  </div>
</div>
      {/* DESCRIPTION */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  )
}

export default AppDetails