import React from "react";

interface NavigationItem {
  icon: string;
  label: string;
  active?: boolean;
}

export const DashboardEditing = (): React.JSX.Element => {
  const navigationItems: NavigationItem[] = [
    {
      icon: "https://c.animaapp.com/XdAukl9F/img/icon---home--dashboard-.svg",
      label: "Dashboard",
    },
    {
      icon: "https://c.animaapp.com/XdAukl9F/img/icon---patients.svg",
      label: "Patients",
    },
    {
      icon: "https://c.animaapp.com/XdAukl9F/img/icon---calendar--appointments-.svg",
      label: "Calendar",
    },
    {
      icon: "https://c.animaapp.com/XdAukl9F/img/icon---briefcase-medical--planning-.svg",
      label: "Planning",
    },
    {
      icon: "https://c.animaapp.com/XdAukl9F/img/icon---message-square-text--message-.svg",
      label: "Messages",
    },
  ];

  const breadcrumbs = [
    { label: "Doctor Portal", active: false },
    { label: "Dashboard Customization", active: true },
  ];

  const agendaTimeSlots = [
    { time: "9:00 - 9:30 AM", name: "Charlie Kim", reason: "Regular Check-up" },
    {
      time: "9:45 - 10:00 AM",
      name: "Daniel Okafor",
      reason: "Blood Pressure Exam",
    },
    {
      time: "10:15 - 11:00 AM",
      name: "Sophia Nguyen",
      reason: "Acne Treatment",
    },
    {
      time: "11:30 - 12:00 PM",
      name: "Chloe Martin",
      reason: "Medication Refill",
    },
  ];

  const calendarHours = ["9", "10", "11", "12", "1", "2"];

  return (
    <div
      className="bg-[#f0f7fc] w-full min-w-[1440px] min-h-[1024px] relative"
    >
      <aside className="absolute top-0 left-0 w-60 h-[1024px] bg-backgroundcard rounded-[0px_20px_20px_0px]">
        <div className="flex flex-col w-60 h-[1024px] items-center pt-0 pb-16 px-0 absolute top-0 left-0">
          <div className="flex flex-col w-[239px] h-[645px] items-start relative">
            <div className="flex items-center justify-center gap-2 pt-[72px] pb-14 px-12 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[32.58px] h-[31px]"
                alt="Caduceus"
                src="https://c.animaapp.com/XdAukl9F/img/caduceus@2x.png"
              />
              <div className="relative w-[99px] h-[37px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#1a4fba] text-xl tracking-[0] leading-[normal]">
                eHospital
              </div>
            </div>

            <nav className="flex flex-col h-[373px] items-start gap-4 pl-6 pr-0 py-0 relative self-stretch w-full">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="flex w-[188px] h-[50px] items-center gap-4 px-4 py-0 relative rounded-[10px]"
                >
                  <img
                    className="relative w-6 h-6 aspect-[1]"
                    alt={item.label}
                    src={item.icon}
                  />
                  <div className="relative flex-1 font-body-default-regular font-[number:var(--body-default-regular-font-weight)] text-secondary text-[length:var(--body-default-regular-font-size)] tracking-[var(--body-default-regular-letter-spacing)] leading-[var(--body-default-regular-line-height)] [font-style:var(--body-default-regular-font-style)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </nav>

            <div className="absolute top-[557px] left-[22px] w-[188px] h-[50px]">
              <img
                className="top-[13px] left-4 absolute w-6 h-6 aspect-[1]"
                alt="Icon circle help"
                src="https://c.animaapp.com/XdAukl9F/img/icon---circle-help--help--1.svg"
              />
              <div className="absolute top-[13px] left-14 font-body-default-regular font-[number:var(--body-default-regular-font-weight)] text-secondary text-[length:var(--body-default-regular-font-size)] tracking-[var(--body-default-regular-letter-spacing)] leading-[var(--body-default-regular-line-height)] whitespace-nowrap [font-style:var(--body-default-regular-font-style)]">
                Help
              </div>
            </div>
          </div>

          <button className="flex h-[41px] items-center gap-4 pl-10 pr-0 absolute bottom-[59px] left-0 w-full">
            <img
              className="relative w-6 h-6 aspect-[1]"
              alt="Icon provide"
              src="https://c.animaapp.com/XdAukl9F/img/icon---provide-feedback.svg"
            />
            <div className="relative w-fit font-body-default-regular font-[number:var(--body-default-regular-font-weight)] text-secondary text-[length:var(--body-default-regular-font-size)] tracking-[var(--body-default-regular-letter-spacing)] leading-[var(--body-default-regular-line-height)] [font-style:var(--body-default-regular-font-style)]">
              Feedback
            </div>
          </button>
        </div>

        <div className="flex w-[78.33%] h-[4.88%] items-center gap-4 px-4 py-0 absolute top-[48.34%] left-[9.17%]">
          <img
            className="relative w-6 h-6"
            alt="Lucide pen line"
            src="https://c.animaapp.com/XdAukl9F/img/lucide-pen-line.svg"
          />
          <div className="relative w-fit font-body-default-regular font-[number:var(--body-default-regular-font-weight)] text-variable-collection-text-primary text-[length:var(--body-default-regular-font-size)] tracking-[var(--body-default-regular-letter-spacing)] leading-[var(--body-default-regular-line-height)] whitespace-nowrap [font-style:var(--body-default-regular-font-style)]">
            Customize
          </div>
        </div>
      </aside>

      <main className="absolute top-0 left-60 w-[1200px] h-[1024px] bg-[#ffffff33]">
        <header className="flex w-[1200px] h-[124px] items-end justify-between absolute top-0 left-0 bg-backgroundpage">
          <nav className="inline-flex flex-col items-start gap-2.5 pl-10 pr-0 pt-0 pb-7 relative flex-[0_0_auto]">
            <div className="flex justify-center self-stretch w-full items-center gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex h-[21px] items-center gap-2 relative flex-[0_0_auto]">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <div
                      className={`relative flex items-center justify-center w-fit mt-[-0.50px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] ${
                        crumb.active
                          ? "text-textsecondary"
                          : "text-textplaceholder-or-disabled-text"
                      } text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]`}
                    >
                      {crumb.label}
                    </div>
                    {index < breadcrumbs.length - 1 && (
                      <div className="relative flex items-center justify-center w-fit mt-[-0.50px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-textplaceholder-or-disabled-text text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                        /
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </nav>

          <div className="inline-flex flex-col h-[124px] items-center justify-center gap-2.5 pl-0 pr-12 py-8 relative flex-[0_0_auto]">
            <div className="flex h-12 items-center justify-center gap-4 relative self-stretch w-full">
              <button className="relative w-[118px] h-9">
                <div className="inline-flex flex-col items-center justify-center gap-2.5 px-4 py-2 absolute top-0 left-0 rounded-2xl overflow-hidden shadow-[inset_0px_-4px_2px_#00000026,inset_0px_2px_1px_#00000026,0px_2px_4px_#00000040] bg-[linear-gradient(219deg,rgba(26,78,186,1)_0%,rgba(63,125,219,1)_45%,rgba(165,111,255,1)_100%)] bg-[color:var(--variable-collection-primary-default-or-border)]">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [text-shadow:0px_1px_2px_#00000040] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-texton-primary-or-hover text-[length:var(--body-small-medium-font-size)] text-center tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                    AI&nbsp;&nbsp;Assistant
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-[118px] h-[22px] rounded-[16px_16px_0px_0px] bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)]" />
              </button>

              <button className="relative w-12 h-12 aspect-[1]">
                <img
                  className="w-full h-full"
                  alt="Icon bell"
                  src="https://c.animaapp.com/XdAukl9F/img/icon---bell.svg"
                />
              </button>

              <button className="relative w-12 h-12 aspect-[1]">
                <img
                  className="w-full h-full"
                  alt="Icon user"
                  src="https://c.animaapp.com/XdAukl9F/img/icon---user.svg"
                />
              </button>
            </div>
          </div>
        </header>

        <h1 className="absolute top-[123px] left-[calc(50.00%_-_571px)] w-[597px] h-[95px] flex items-center justify-center font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-black text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
          Choose preferred appointment view
        </h1>

        <div className="absolute top-[247px] left-[163px] w-[329px] h-[265px]">
          <img
            className="w-full h-full"
            alt="Example layout card"
            src="https://c.animaapp.com/XdAukl9F/img/example-layout-card-1.svg"
          />
        </div>

        <div className="absolute top-[496px] left-[calc(50.00%_-_437px)] w-[310px] h-[95px] flex items-center justify-center font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-black text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
          Calendar
        </div>

        <div className="top-[247px] left-[655px] bg-[#a8bff0] border border-solid border-[#6e7191] absolute w-[329px] h-[265px]">
          <div className="flex flex-col w-[191px] h-[247px] items-start gap-4 p-6 absolute top-[9px] left-[69px] bg-backgroundcard rounded-2xl overflow-hidden">
            <div className="absolute top-[41px] left-3 w-3 h-[206px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-gray-500 text-[10px] tracking-[0] leading-[34px]">
              {calendarHours.map((hour, index) => (
                <React.Fragment key={index}>
                  {hour}
                  {index < calendarHours.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <img
            className="absolute top-[53px] left-[98px] w-[159px] h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/XdAukl9F/img/line-36.svg"
          />
          <img
            className="absolute top-[86px] left-[98px] w-[159px] h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/XdAukl9F/img/line-36.svg"
          />
          <img
            className="absolute top-[119px] left-[98px] w-[159px] h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/XdAukl9F/img/line-36.svg"
          />
          <img
            className="absolute top-[153px] left-[98px] w-[159px] h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/XdAukl9F/img/line-36.svg"
          />
          <img
            className="absolute top-[186px] left-0 w-[257px] h-[79px]"
            alt="Line"
            src="https://c.animaapp.com/XdAukl9F/img/line-35.svg"
          />
          <img
            className="absolute top-[222px] left-[98px] w-[159px] h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/XdAukl9F/img/line-36.svg"
          />
        </div>

        <div className="absolute top-[490px] left-[calc(50.00%_+_55px)] w-[310px] h-[95px] flex items-center justify-center font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-black text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
          Agenda
        </div>

        <div className="absolute top-[592px] left-[163px] w-[329px] h-[265px]">
          <img
            className="w-full h-full"
            alt="Example layout card"
            src="https://c.animaapp.com/XdAukl9F/img/example-layout-card-1-1.svg"
          />
        </div>

        <div className="absolute top-[869px] left-[calc(50.00%_-_437px)] w-[310px] h-[95px] flex items-center justify-center font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-black text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
          Time Block
        </div>

        <div className="top-[604px] left-[655px] bg-[#a8bff0] border border-solid border-[#6e7191] absolute w-[329px] h-[265px]">
          <img
            className="absolute top-11 left-[19px] w-[291px] h-[178px]"
            alt="Rectangle"
            src="https://c.animaapp.com/XdAukl9F/img/rectangle-50.svg"
          />

          <div className="absolute top-[72px] left-[31px] w-[73px] h-[63px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-[7px] tracking-[-0.08px] leading-[10.5px]">
            Time
            <br />
            <br />
            <br />
            {agendaTimeSlots.map((slot, index) => (
              <React.Fragment key={index}>
                {slot.time}
                {index < agendaTimeSlots.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>

          <div className="absolute top-[71px] left-[93px] w-[69px] h-[63px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-[7px] tracking-[-0.08px] leading-[10.5px]">
            Name
            <br />
            <br />
            <br />
            {agendaTimeSlots.map((slot, index) => (
              <React.Fragment key={index}>
                {slot.name}
                {index < agendaTimeSlots.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>

          <div className="absolute top-16 left-[155px] w-[82px] h-[77px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-[7px] tracking-[-0.08px] leading-[10.5px]">
            Reason for Visit
            <br />
            <br />
            <br />
            {agendaTimeSlots.map((slot, index) => (
              <React.Fragment key={index}>
                {slot.reason}
                {index < agendaTimeSlots.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>

          <img
            className="absolute top-24 left-[237px] w-2.5 h-2.5"
            alt="Lucide"
            src="https://c.animaapp.com/XdAukl9F/img/lucide.svg"
          />
          <img
            className="absolute top-[107px] left-[237px] w-2.5 h-2.5"
            alt="Lucide"
            src="https://c.animaapp.com/XdAukl9F/img/lucide-1.svg"
          />
          <img
            className="absolute top-[119px] left-[237px] w-2.5 h-2.5"
            alt="Lucide"
            src="https://c.animaapp.com/XdAukl9F/img/lucide-2.svg"
          />
          <img
            className="absolute w-[3.04%] h-[3.77%] top-[49.06%] left-[72.04%]"
            alt="Lucide"
            src="https://c.animaapp.com/XdAukl9F/img/lucide-3.svg"
          />
          <img
            className="absolute top-24 left-[259px] w-2.5 h-2.5"
            alt="Lucide"
            src="https://c.animaapp.com/XdAukl9F/img/lucide-4.svg"
          />
          <img
            className="absolute top-[107px] left-[259px] w-2.5 h-2.5"
            alt="Lucide"
            src="https://c.animaapp.com/XdAukl9F/img/lucide-5.svg"
          />
          <img
            className="absolute top-[119px] left-[259px] w-2.5 h-2.5"
            alt="Lucide"
            src="https://c.animaapp.com/XdAukl9F/img/lucide-6.svg"
          />
          <img
            className="absolute top-[131px] left-[259px] w-2.5 h-2.5"
            alt="Lucide"
            src="https://c.animaapp.com/XdAukl9F/img/lucide-7.svg"
          />
        </div>

        <div className="absolute top-[869px] left-[calc(50.00%_+_55px)] w-[310px] h-[95px] flex items-center justify-center font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-black text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)]">
          List
        </div>

        <div className="absolute top-[969px] left-[421px] w-[358px] h-[35px] flex gap-[7px] overflow-hidden">
          <img
            className="mt-1.5 w-6 h-6 ml-2 aspect-[1]"
            alt="Icon circle help"
            src="https://c.animaapp.com/XdAukl9F/img/icon---circle-help--help-.svg"
          />
          <p className="flex items-center justify-center mt-[9px] w-[351px] h-[17px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[color:var(--variable-collection-secondary-default)] text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
            Click this icon for more information
          </p>
        </div>

        <div className="top-40 left-[316px] absolute w-6 h-6 aspect-[1]" />

        <img
          className="absolute w-0 h-0 top-[15.72%] left-[54.42%]"
          alt="Vector"
          src="https://c.animaapp.com/XdAukl9F/img/vector.svg"
        />

        <button className="absolute top-[965px] left-10 [font-family:'Inter',Helvetica] font-normal text-neutral-600 text-2xl tracking-[0] leading-[33.6px] underline whitespace-nowrap">
          &lt; Back
        </button>
      </main>

      <div className="absolute top-[496px] left-[21px] w-[188px] h-[50px]" />
    </div>
  );
};
