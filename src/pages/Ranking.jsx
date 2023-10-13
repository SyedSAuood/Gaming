import React from 'react'

const Ranking = ({ games }) => {
    return (
        <div className="mb-6 flex flex-col w-fit items-start gap-[16px] pt-[8px] pb-[24px] px-[16px] relative bg-main-bg">
            <div className="pl-0 pr-[580px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className=" ms-4 relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
                    Top Achievements
                </div>
            </div>

            <div className="flex items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">

                <div className="flex flex-col w-[353px] items-start gap-[16px] relative self-stretch">
                    <div className="pl-0 pr-[206px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="ms-4  relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-[#9ca2c4] text-[16px] tracking-[0.15px] leading-[24px]  whitespace-nowrap">
                            *game name*
                        </div>
                    </div>
                    {
                        games.map(item => (
                            <div className="flex-col gap-[16px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex flex-col items-start p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-main-dark-bg hover:bg-gradient-to-b hover:from-transparent hover:to-[rgba(11,12,23,0.9)] cursor-pointer rounded-[10px]">
                                    <div className="pl-0 pr-[157px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0.15px] leading-[21px] whitespace-nowrap">
                                        *player name*
                                        </div>
                                    </div>
                                    <div className="justify-between flex items-start relative self-stretch w-full flex-[0_0_auto]">
                                        <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-[#1fe078] text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
                                                1st Place
                                            </div>
                                        </div>
                                        <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                                            <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
                                                $500,000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>




                <div className="flex flex-col w-[353px] items-start gap-[16px] relative self-stretch">
                    <div className="pl-0 pr-[209px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-[#9ca2c4] text-[16px] tracking-[0.15px] leading-[24px] whitespace-nowrap">
                            *game name*
                        </div>
                    </div>

                    {games.map(item => (
                        <div className="flex-col gap-[16px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-start p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-main-dark-bg hover:bg-gradient-to-b hover:from-transparent hover:to-[rgba(11,12,23,0.9)] cursor-pointer rounded-[10px]">
                                <div className="pl-0 pr-[157px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0.15px] leading-[21px] whitespace-nowrap">
                                    *player name*
                                    </div>
                                </div>
                                <div className="justify-between flex items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-[#1fe078] text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
                                            1st Place
                                        </div>
                                    </div>
                                    <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
                                            $500,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>





                <div className="flex flex-col w-[353px] items-start gap-[16px] relative self-stretch">
                    <div className="pl-0 pr-[209px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-[#9ca2c4] text-[16px] tracking-[0.15px] leading-[24px] whitespace-nowrap">
                            *game name*
                        </div>
                    </div>

                    {games.map(item => (
                        <div className="flex-col gap-[16px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-start p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-main-dark-bg hover:bg-gradient-to-b hover:from-transparent hover:to-[rgba(11,12,23,0.9)] cursor-pointer rounded-[10px]">
                                <div className="pl-0 pr-[157px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0.15px] leading-[21px] whitespace-nowrap">
                                        *player name*
                                    </div>
                                </div>
                                <div className="justify-between flex items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-[#1fe078] text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
                                            1st Place
                                        </div>
                                    </div>
                                    <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
                                            $500,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* <div className="flex flex-col w-[353px] items-start gap-[16px] relative self-stretch">
                    <div className="pl-0 pr-[209px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-[#9ca2c4] text-[16px] tracking-[0.15px] leading-[24px] whitespace-nowrap">
                            *game name*
                        </div>
                    </div>

                    {games.map(item => (
                        <div className="flex-col gap-[16px] flex items-start relative self-stretch w-full flex-[0_0_auto]">
                            <div className="flex flex-col items-start p-[16px] relative self-stretch w-full flex-[0_0_auto] bg-blue rounded-[10px]">
                                <div className="pl-0 pr-[157px] py-0 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0.15px] leading-[21px] whitespace-nowrap">
                                        *player name*
                                    </div>
                                </div>
                                <div className="justify-between flex items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-[#1fe078] text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
                                            1st Place
                                        </div>
                                    </div>
                                    <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Barlow-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0.15px] leading-[27px] whitespace-nowrap">
                                            $500,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

            </div>
        </div>
    )
}

export default Ranking