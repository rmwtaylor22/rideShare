create table if not exists "Authorization"
(
	driverid integer not null
		constraint "Authorization_driverid_fkey"
			references "Driver",
	vehicleid integer not null
		constraint "Authorization_vehicleid_fkey"
			references "Vehicle"
);

create table if not exists "Drivers"
(
	driverid integer not null
		constraint "Drivers_driverid_fkey"
			references "Driver",
	rideid integer not null
		constraint "Drivers_rideid_fkey"
			references "Ride"
);

create table if not exists "Driver"
(
	id integer not null
		constraint "Driver_pkey"
			primary key,
	firstname varchar not null,
	lastname varchar not null,
	phone varchar not null,
	licensenumber varchar not null
);

create table if not exists "Location"
(
	id integer not null
		constraint "Location_pkey"
			primary key,
	name varchar not null,
	address varchar not null,
	city varchar not null,
	state varchar not null
		constraint "Location_state_fkey"
			references "State",
	zipcode varchar not null
);

create table if not exists "Passenger"
(
	id integer not null
		constraint "Passenger_pkey"
			primary key,
	firstname varchar not null,
	lastname varchar not null,
	phone varchar not null
);

create table if not exists "Passengers"
(
	passengerid integer not null
		constraint "Passengers_passengerid_fkey"
			references "Passenger",
	rideid integer not null
		constraint "Passengers_rideid_fkey"
			references "Ride"
);

create table if not exists "Ride"
(
	id integer not null
		constraint "Ride_pkey"
			primary key,
	date date not null,
	time time not null,
	distance double precision not null,
	fuelprice double precision not null,
	fee double precision not null,
	vehicleid integer not null
		constraint "Ride_vehicleid_fkey"
			references "Vehicle",
	fromlocationid integer not null
		constraint "Ride_fromlocationid_fkey"
			references "Location",
	tolocationid integer not null
		constraint "Ride_tolocationid_fkey"
			references "Location"
);

create table if not exists "State"
(
	abbreviation varchar not null
		constraint "State_pkey"
			primary key,
	name varchar not null
);

create table if not exists "Vehicle"
(
	id integer not null
		constraint "Vehicle_pkey"
			primary key,
	make varchar not null,
	model varchar not null,
	color varchar not null,
	vehicletypeid integer not null
		constraint "Vehicle_vehicletypeid_fkey"
			references "VehicleType",
	capacity integer not null,
	mpg double precision not null,
	licensestate varchar not null,
	licensenumber varchar not null
);

create table if not exists "VehicleType"
(
	id integer not null
		constraint "VehicleType_pkey"
			primary key,
	type varchar not null
);
