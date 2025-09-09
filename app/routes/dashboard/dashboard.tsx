import React from "react";


const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="h-[500px] bg-white rounded-lg shadow-[var(--card-shadow)] p-[15px] flex flex-col
">
<p className="text-sm text-gray-600">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum urna, at cursus enim erat nec urna.
</p>
<p className="text-sm text-gray-600">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum urna, at cursus enim erat nec urna.
</p>
<p className="text-sm text-gray-600">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum urna, at cursus enim erat nec urna.
</p>                
            </div>
            <div className="h-[500px] w-full bg-amber-800">sd</div>
            <div className="h-[500px] w-full bg-amber-800">sd</div>
        </div>
    );
}
export default Dashboard;