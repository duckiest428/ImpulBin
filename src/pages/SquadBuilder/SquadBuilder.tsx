import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockPlayers } from '../../data/mockPlayers';
import { getAssetUrl } from '../../utils/assetUrl';
import { SafeImage } from '../../components/SafeImage';
import { FIFA17PlayerCardBase } from '../../components/FIFA17PlayerCard';

interface Player {
  id: number;
  name: string;
  rating: number;
  position: string;
  pac?: number;
  sho?: number;
  pas?: number;
  dri?: number;
  def?: number;
  phy?: number;
  price?: string;
  image?: string;
  sm?: number;
  wf?: number;
}

interface FormationPosition {
  id: string;
  label: string;
  top: string;
  left: string;
}

const FORMATIONS: Record<string, FormationPosition[]> = {
  '4-3-3': [
    { id: 'pos_lw', label: 'LW', top: '24%', left: '22%' },
    { id: 'pos_st', label: 'ST', top: '22%', left: '50%' },
    { id: 'pos_rw', label: 'RW', top: '24%', left: '78%' },
    { id: 'pos_cm1', label: 'CM', top: '48%', left: '28%' },
    { id: 'pos_cm2', label: 'CM', top: '54%', left: '50%' },
    { id: 'pos_cm3', label: 'CM', top: '48%', left: '72%' },
    { id: 'pos_lb', label: 'LB', top: '70%', left: '16%' },
    { id: 'pos_cb1', label: 'CB', top: '74%', left: '38%' },
    { id: 'pos_cb2', label: 'CB', top: '74%', left: '62%' },
    { id: 'pos_rb', label: 'RB', top: '70%', left: '84%' },
    { id: 'pos_gk', label: 'GK', top: '88%', left: '50%' },
  ],
  '4-4-2': [
    { id: 'pos_st1', label: 'ST', top: '22%', left: '38%' },
    { id: 'pos_st2', label: 'ST', top: '22%', left: '62%' },
    { id: 'pos_lm', label: 'LM', top: '48%', left: '18%' },
    { id: 'pos_cm1', label: 'CM', top: '50%', left: '40%' },
    { id: 'pos_cm2', label: 'CM', top: '50%', left: '60%' },
    { id: 'pos_rm', label: 'RM', top: '48%', left: '82%' },
    { id: 'pos_lb', label: 'LB', top: '70%', left: '16%' },
    { id: 'pos_cb1', label: 'CB', top: '74%', left: '38%' },
    { id: 'pos_cb2', label: 'CB', top: '74%', left: '62%' },
    { id: 'pos_rb', label: 'RB', top: '70%', left: '84%' },
    { id: 'pos_gk', label: 'GK', top: '88%', left: '50%' },
  ],
  '4-2-3-1': [
    { id: 'pos_st', label: 'ST', top: '20%', left: '50%' },
    { id: 'pos_lam', label: 'LAM', top: '36%', left: '22%' },
    { id: 'pos_cam', label: 'CAM', top: '34%', left: '50%' },
    { id: 'pos_ram', label: 'RAM', top: '36%', left: '78%' },
    { id: 'pos_cdm1', label: 'CDM', top: '56%', left: '38%' },
    { id: 'pos_cdm2', label: 'CDM', top: '56%', left: '62%' },
    { id: 'pos_lb', label: 'LB', top: '70%', left: '16%' },
    { id: 'pos_cb1', label: 'CB', top: '74%', left: '38%' },
    { id: 'pos_cb2', label: 'CB', top: '74%', left: '62%' },
    { id: 'pos_rb', label: 'RB', top: '70%', left: '84%' },
    { id: 'pos_gk', label: 'GK', top: '88%', left: '50%' },
  ],
  '3-5-2': [
    { id: 'pos_st1', label: 'ST', top: '20%', left: '36%' },
    { id: 'pos_st2', label: 'ST', top: '20%', left: '64%' },
    { id: 'pos_cam', label: 'CAM', top: '36%', left: '50%' },
    { id: 'pos_lm', label: 'LM', top: '44%', left: '16%' },
    { id: 'pos_cdm1', label: 'CDM', top: '54%', left: '38%' },
    { id: 'pos_cdm2', label: 'CDM', top: '54%', left: '62%' },
    { id: 'pos_rm', label: 'RM', top: '44%', left: '84%' },
    { id: 'pos_cb1', label: 'CB', top: '74%', left: '26%' },
    { id: 'pos_cb2', label: 'CB', top: '76%', left: '50%' },
    { id: 'pos_cb3', label: 'CB', top: '74%', left: '74%' },
    { id: 'pos_gk', label: 'GK', top: '88%', left: '50%' },
  ],
};

const SUBS = ['sub_1', 'sub_2', 'sub_3', 'sub_4', 'sub_5', 'sub_6', 'sub_7'];
const RESERVES = ['res_1', 'res_2', 'res_3', 'res_4', 'res_5'];

export default function SquadBuilder() {
  const [formation, setFormation] = useState<string>('4-3-3');
  const [squadName, setSquadName] = useState<string>('');
  const [squad, setSquad] = useState<Record<string, Player>>({});
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPositionFilter, setSelectedPositionFilter] = useState<string>('ALL');
  const [showFullAverages, setShowFullAverages] = useState<boolean>(false);

  const currentFormationPositions = FORMATIONS[formation] || FORMATIONS['4-3-3'];

  const handleSelectSlot = (slotId: string) => {
    setSelectedSlot(slotId);
  };

  const handleRemovePlayer = (slotId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSquad((prev) => {
      const copy = { ...prev };
      delete copy[slotId];
      return copy;
    });
  };

  const handleAddPlayer = (player: Player) => {
    if (selectedSlot) {
      setSquad((prev) => ({
        ...prev,
        [selectedSlot]: player,
      }));
      setSelectedSlot(null);
    }
  };

  // Calculations
  const squadPlayers: Player[] = Object.values(squad);
  const totalCount = squadPlayers.length;
  
  const squadRating = totalCount > 0 
    ? Math.round(squadPlayers.reduce((acc: number, p: Player) => acc + (p.rating || 0), 0) / totalCount) 
    : 0;

  const totalChemistry = Math.min(33, totalCount * 3);

  const calculateStatAvg = (statKey: 'pac' | 'sho' | 'pas' | 'dri' | 'def' | 'phy') => {
    if (totalCount === 0) return '-';
    const total = squadPlayers.reduce((acc: number, p: Player) => acc + (p[statKey] || 0), 0);
    return Math.round(total / totalCount);
  };

  const parseCoins = (priceStr?: string) => {
    if (!priceStr) return 0;
    const clean = priceStr.replace(/,/g, '').replace(/K/i, '000').replace(/M/i, '000000');
    return parseInt(clean, 10) || 0;
  };

  const totalPriceNumber = squadPlayers.reduce((acc: number, p: Player) => acc + parseCoins(p.price), 0);
  const totalPriceFormatted = totalPriceNumber > 0 ? totalPriceNumber.toLocaleString() : '0';

  // Card slot component matching exact design
  const SlotCard = ({ slotId, label, isManager }: { slotId: string; label?: string; isManager?: boolean }) => {
    const player = squad[slotId];

    return (
      <div className="relative flex flex-col items-center group">
        <div 
          onClick={() => handleSelectSlot(slotId)}
          className={`cursor-pointer transition-transform hover:scale-105 duration-200 relative flex items-center justify-center ${
            isManager ? 'w-20 h-28 sm:w-24 sm:h-32' : 'w-[84px] h-[112px] sm:w-[96px] sm:h-[128px]'
          }`}
        >
          {player ? (
            <div className="relative w-full h-full flex flex-col items-center group">
              <div className="w-full h-full">
                <FIFA17PlayerCardBase
                  name={player.name}
                  rating={player.rating}
                  position={player.position}
                />
              </div>
              <button 
                className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity z-20 shadow-md"
                onClick={(e) => handleRemovePlayer(slotId, e)}
              >
                ✕
              </button>
            </div>
          ) : (
            <div className="w-full h-full bg-[#181a20]/90 backdrop-blur-sm rounded-lg border border-[#2b303c] shadow-lg flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[#00e575]/60 transition-colors">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded border border-[#00e575] flex items-center justify-center bg-[#00e575]/10 shadow-[0_0_10px_rgba(0,229,117,0.2)]">
                <span className="text-[#00e575] text-lg sm:text-xl font-light leading-none">+</span>
              </div>
            </div>
          )}
        </div>

        {/* Position Badge */}
        {label && !player && (
          <div className="mt-1 bg-[#121418] text-white text-[11px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-full border border-[#2d3240] shadow-md uppercase tracking-wider">
            {label}
          </div>
        )}
      </div>
    );
  };

  // Render Search Drawer/Modal view when a slot is clicked
  if (selectedSlot) {
    const filteredPlayers = mockPlayers.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.position.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPos = selectedPositionFilter === 'ALL' || p.position === selectedPositionFilter;
      return matchesSearch && matchesPos;
    });

    return (
      <div className="min-h-screen bg-[#0f1115] text-white py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Main Search Column */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="text-gray-400 text-xs sm:text-sm mb-2 flex items-center space-x-2">
                <Link to="/" className="hover:text-white">Home</Link>
                <span>›</span>
                <Link to="/squads" className="hover:text-white">FIFA 17 Community Squads</Link>
                <span>›</span>
                <span className="text-gray-200 font-medium">Squad Builder</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold mb-1 tracking-tight">FIFA 17 Squad Builder</h1>
              <p className="text-gray-400 text-sm">Select player for slot: <span className="text-[#00e575] font-bold">{selectedSlot}</span></p>
            </div>

            <div className="flex justify-between items-center border-b border-gray-800 mb-6 pb-2">
              <div className="flex space-x-6">
                <button className="pb-3 border-b-2 border-[#00e575] text-white font-bold text-sm sm:text-base">Search</button>
                <button className="pb-3 text-gray-400 hover:text-white font-medium text-sm sm:text-base">My Evolution Players</button>
                <button className="pb-3 text-gray-400 hover:text-white font-medium text-sm sm:text-base">Saved Evolution Players</button>
              </div>
              <button 
                onClick={() => setSelectedSlot(null)}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full p-2 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="mb-4 relative max-w-md">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for Player..." 
                className="w-full bg-[#16181f] border border-gray-700 rounded-lg py-2.5 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#00e575] text-sm shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {['ALL', 'GK', 'LB', 'CB', 'RB', 'CAM', 'CM', 'CDM', 'RM', 'LM', 'ST', 'RW', 'LW'].map(pos => (
                <button 
                  key={pos} 
                  onClick={() => setSelectedPositionFilter(pos)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all border ${
                    selectedPositionFilter === pos
                      ? 'bg-[#00e575] text-black border-[#00e575]'
                      : 'bg-[#16181f] text-gray-300 border-gray-800 hover:border-gray-600'
                  }`}
                >
                  {pos}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredPlayers.map(player => (
                <div 
                  key={player.id} 
                  className="cursor-pointer transition-transform hover:scale-105 duration-200 flex flex-col items-center"
                  onClick={() => handleAddPlayer(player)}
                >
                  <div className="w-full max-w-[130px]">
                    <FIFA17PlayerCardBase
                      name={player.name}
                      rating={player.rating}
                      position={player.position}
                    />
                  </div>
                  <div className="mt-1 text-center">
                    <span className="text-xs font-bold text-gray-300">{player.name}</span>
                    <div className="text-[10px] text-[#00e575] font-semibold">{player.price || 'FREE'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <SidebarInfo 
              formation={formation} 
              setFormation={setFormation}
              squadName={squadName}
              setSquadName={setSquadName}
              squadRating={squadRating}
              totalChemistry={totalChemistry}
              calculateStatAvg={calculateStatAvg}
              totalPriceFormatted={totalPriceFormatted}
              showFullAverages={showFullAverages}
              setShowFullAverages={setShowFullAverages}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0d10] text-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Breadcrumb & Title Section */}
        <div>
          <div className="text-gray-400 text-xs sm:text-sm mb-2 flex items-center space-x-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link to="/" className="hover:text-white transition-colors">FIFA 17 Community Squads</Link>
            <span>›</span>
            <span className="text-gray-200 font-medium">Squad Builder</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">FIFA 17 Squad Builder</h1>
              <p className="text-gray-400 text-xs sm:text-sm">Create FIFA 17 Squads</p>
            </div>
          </div>
        </div>

        {/* Pitch and Sidebar Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Pitch & Subs Left Column */}
          <div className="flex-1 w-full max-w-4xl space-y-6">
            {/* Top Bar above Pitch */}
            <div className="flex justify-between items-center px-1">
              <div className="flex items-center gap-2 text-sm font-bold text-[#00e575]">
                <span>{totalPriceFormatted}</span>
                <SafeImage src={'https://cdn.futbin.com/design/img/coins_bin.png'} fallbackType="coin" className="w-4 h-4 inline" alt="coins" />
              </div>

              <div className="flex items-center gap-2">
                <button className="border border-[#00e575] text-white bg-[#151921]/80 hover:bg-[#00e575]/20 font-semibold px-4 py-1.5 rounded-full text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5">
                  <span>Add Tactics</span>
                </button>
                <div className="w-7 h-7 bg-[#00e575] text-black rounded flex items-center justify-center font-bold text-xs shadow-md">
                  i
                </div>
              </div>
            </div>

            {/* Pitch Container */}
            <div className="flex items-start">
              {/* Manager Slot on Left */}
              <div className="mr-3 sm:mr-4 mt-6 z-20">
                <SlotCard slotId="manager" label="Manager" isManager={true} />
              </div>

              {/* Realistic Pitch */}
              <div className="flex-1 relative aspect-[16/11] rounded-2xl overflow-hidden border border-[#1e261f] shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#122b16]">
                {/* Grass stripes and markings */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundColor: '#163b1d',
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 12.5%, rgba(0,0,0,0.12) 12.5%, rgba(0,0,0,0.12) 25%),
                      repeating-linear-gradient(90deg, transparent, transparent 10%, rgba(255,255,255,0.02) 10%, rgba(255,255,255,0.02) 20%)
                    `
                  }}
                >
                  {/* Outer field border */}
                  <div className="absolute inset-3 border-2 border-white/25 rounded-lg"></div>

                  {/* Halfway Line */}
                  <div className="absolute top-1/2 left-3 right-3 h-0.5 bg-white/25 -translate-y-1/2"></div>

                  {/* Center Circle */}
                  <div className="absolute top-1/2 left-1/2 w-36 h-36 border-2 border-white/25 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  </div>

                  {/* Top Penalty Box */}
                  <div className="absolute top-3 left-1/2 w-1/2 h-1/5 border-2 border-t-0 border-white/25 -translate-x-1/2 rounded-b-md"></div>
                  <div className="absolute top-3 left-1/2 w-1/4 h-1/10 border-2 border-t-0 border-white/25 -translate-x-1/2 rounded-b-md"></div>

                  {/* Bottom Penalty Box */}
                  <div className="absolute bottom-3 left-1/2 w-1/2 h-1/5 border-2 border-b-0 border-white/25 -translate-x-1/2 rounded-t-md"></div>
                  <div className="absolute bottom-3 left-1/2 w-1/4 h-1/10 border-2 border-b-0 border-white/25 -translate-x-1/2 rounded-t-md"></div>
                </div>

                {/* Formation Player Card Slots */}
                {currentFormationPositions.map((pos) => (
                  <div
                    key={pos.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                    style={{ top: pos.top, left: pos.left }}
                  >
                    <SlotCard slotId={pos.id} label={pos.label} />
                  </div>
                ))}
              </div>
            </div>

            {/* Bench & Reserves Section */}
            <div className="space-y-4 pt-2">
              {/* Subs Row */}
              <div className="bg-[#14161d] p-4 rounded-2xl border border-[#232733] shadow-lg">
                <div className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider pl-1">Substitutes</div>
                <div className="flex justify-start sm:justify-center gap-4 overflow-x-auto pb-2 hide-scrollbar">
                  {SUBS.map(slotId => (
                    <div key={slotId} className="flex-shrink-0">
                      <SlotCard slotId={slotId} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Reserves Row */}
              <div className="bg-[#14161d] p-4 rounded-2xl border border-[#232733] shadow-lg">
                <div className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider pl-1">Reserves</div>
                <div className="flex justify-start sm:justify-center gap-4 overflow-x-auto pb-2 hide-scrollbar">
                  {RESERVES.map(slotId => (
                    <div key={slotId} className="flex-shrink-0">
                      <SlotCard slotId={slotId} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Panel */}
          <div className="w-full lg:w-80 flex-shrink-0 sticky top-20">
            <SidebarInfo 
              formation={formation} 
              setFormation={setFormation}
              squadName={squadName}
              setSquadName={setSquadName}
              squadRating={squadRating}
              totalChemistry={totalChemistry}
              calculateStatAvg={calculateStatAvg}
              totalPriceFormatted={totalPriceFormatted}
              showFullAverages={showFullAverages}
              setShowFullAverages={setShowFullAverages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarInfo({
  formation,
  setFormation,
  squadName,
  setSquadName,
  squadRating,
  totalChemistry,
  calculateStatAvg,
  totalPriceFormatted,
  showFullAverages,
  setShowFullAverages,
}: {
  formation: string;
  setFormation: (f: string) => void;
  squadName: string;
  setSquadName: (n: string) => void;
  squadRating: number;
  totalChemistry: number;
  calculateStatAvg: (s: any) => number | string;
  totalPriceFormatted: string;
  showFullAverages: boolean;
  setShowFullAverages: (b: boolean) => void;
}) {
  return (
    <div className="bg-[#161821] rounded-2xl border border-[#2b3040] p-6 shadow-2xl space-y-6">
      {/* Create Squad Title & Name Input */}
      <div>
        <h3 className="font-extrabold text-lg mb-3 text-white tracking-tight">Create Squad</h3>
        <div className="flex gap-2">
          <input 
            type="text" 
            value={squadName}
            onChange={(e) => setSquadName(e.target.value)}
            placeholder="Squad name" 
            className="flex-1 bg-[#101217] border border-[#2d3240] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00e575] shadow-inner"
          />
          <button className="bg-[#232733] hover:bg-[#2e3445] px-3 py-2.5 rounded-xl transition-colors text-gray-300 text-sm flex items-center justify-center font-bold">
            💾
          </button>
        </div>
      </div>

      {/* Squad Info Section */}
      <div className="space-y-4">
        <h3 className="font-extrabold text-base text-white tracking-tight">Squad info</h3>
        
        <div className="flex justify-between items-center">
          <select 
            value={formation}
            onChange={(e) => setFormation(e.target.value)}
            className="bg-[#101217] border border-[#2d3240] rounded-xl px-3 py-2 text-sm text-white outline-none font-semibold cursor-pointer focus:border-[#00e575]"
          >
            <option value="4-3-3">4-3-3</option>
            <option value="4-4-2">4-4-2</option>
            <option value="4-2-3-1">4-2-3-1</option>
            <option value="3-5-2">3-5-2</option>
          </select>

          <div className="text-right">
            <div className="text-xs text-gray-300 font-semibold mb-1">
              Squad Rating: <span className="text-white font-bold">{squadRating}</span>
            </div>
            <div className="flex gap-1 justify-end">
              {[1, 2, 3, 4, 5].map(s => (
                <SafeImage 
                  key={s} 
                  src={getAssetUrl('assets/icons/0_starskills.svg')} 
                  className={`w-3.5 h-3.5 inline-block ${s <= Math.ceil(squadRating / 20) ? 'opacity-100' : 'opacity-30'}`} 
                  alt="star" 
                />
              ))}
            </div>
          </div>
        </div>

        {/* 6 Stat boxes row */}
        <div className="grid grid-cols-6 gap-2 text-center pt-1">
          {(['PAC', 'SHO', 'PAS', 'DRI', 'DEF', 'PHY'] as const).map(stat => (
            <div key={stat} className="flex flex-col items-center">
              <div className="w-full h-9 rounded-xl border border-[#2d3240] bg-[#101217] flex items-center justify-center text-xs font-extrabold text-white mb-1 shadow-inner">
                {calculateStatAvg(stat.toLowerCase() as any)}
              </div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{stat}</div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setShowFullAverages(!showFullAverages)}
          className="w-full flex justify-between items-center text-xs font-semibold text-gray-400 hover:text-white pt-2 transition-colors border-b border-[#252a36] pb-3"
        >
          <span>Full Squad Averages</span>
          <span className="text-gray-500 text-xs">{showFullAverages ? '▲' : '▼'}</span>
        </button>
      </div>

      {/* Total Chemistry Section */}
      <div className="flex justify-between items-center pt-1">
        <span className="font-bold text-sm text-white">Total Chemistry</span>
        <div className="flex items-center gap-2.5">
          <div className="w-24 h-2.5 bg-[#101217] rounded-full overflow-hidden border border-[#2a2e3b]">
            <div 
              className="h-full bg-[#00e575] transition-all duration-300" 
              style={{ width: `${(totalChemistry / 33) * 100}%` }}
            ></div>
          </div>
          <span className="text-xs font-extrabold text-gray-300">{totalChemistry}/33</span>
        </div>
      </div>

      {/* Price Section */}
      <div className="border-t border-[#252a36] pt-5">
        <div className="mb-2">
          <span className="font-extrabold text-sm text-white">Price</span>
        </div>
        <div className="flex items-center gap-2 text-base font-extrabold text-[#00e575]">
          <span>{totalPriceFormatted}</span>
          <SafeImage src={'https://cdn.futbin.com/design/img/coins_bin.png'} fallbackType="coin" className="w-4 h-4 inline" alt="coins" />
        </div>
      </div>
    </div>
  );
}
