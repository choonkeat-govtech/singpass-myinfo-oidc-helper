"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const id = "T2446959F";
const name = fake_profile_1.ProfileArchetype.MRS_PR_HDB_OWNER_WORKING_ADULT_MID_CAREER_PMETS;
/**
 * ArcheType:
 * Age Range 1979-05-16
 * Residential Status	P
 * Sex	F
 * Marital Status	2
 * Local Registered Birth Records	3
 * HDB Ownership	Yes
 * Type of Housing for Registered Address	null
 * Driving License	Yes
 * Vehicle Ownership	Yes
 * Highest Education Level	7
 * Occupation 21441, SOFTWARE_DEVELOPER
 */
exports.mrsPRHdbOwnerWorkingAdult = {
    id,
    name,
    // tslint:disable-next-line: no-big-function
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.dob = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            value: `${new Date().getFullYear() - 41}-05-16`,
        };
        profile.residentialstatus = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "P",
            desc: "PR",
        };
        profile.nationality = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "MY",
        };
        profile.birthcountry = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "MY",
            desc: "MALAYSIA",
        };
        profile.sex = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "F",
            desc: "Female",
        };
        profile.marital = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "2",
            desc: "MARRIED",
        };
        profile.childrenbirthrecords = [childbirthRecords_1.ChildrenRecords.child1MonthOld, childbirthRecords_1.ChildrenRecords.child6YearsOld, childbirthRecords_1.ChildrenRecords.childMiddle1];
        profile.hdbtype = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "112",
            desc: "2-ROOM FLAT (HDB)",
        };
        profile.housingtype = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "",
            desc: "",
        };
        profile.drivinglicence = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            qdl: {
                validity: {
                    code: "V",
                    desc: "Valid",
                },
            },
        };
        profile.vehicles = [
            {
                roadtaxexpirydate: {
                    value: "2020-06-06",
                },
                engineno: {
                    value: "4G13NU1453",
                },
                attachment3: {
                    value: "",
                },
                effectiveownership: {
                    value: "2010-06-06T12:09:05",
                },
                scheme: {
                    value: "OPC - OFF PEAK CAR",
                },
                powerrate: {
                    value: 1.7,
                },
                source: "1",
                primarycolour: {
                    value: "MAROON",
                },
                type: {
                    value: "STATION WAGON/JEEP/LAND ROVER",
                },
                vehicleno: {
                    value: "SBP1818T",
                },
                coeexpirydate: {
                    value: "2020-06-06",
                },
                chassisno: {
                    value: "TUU28391334KL189",
                },
                noxemission: {
                    value: 0.013456,
                },
                model: {
                    value: "FORESTER",
                },
                openmarketvalue: {
                    value: 23485.3,
                },
                coemission: {
                    value: 0.153209,
                },
                attachment2: {
                    value: "",
                },
                attachment1: {
                    value: "CONTINENTAL TIRE",
                },
                make: {
                    value: "SUBARU",
                },
                pmemission: {
                    value: 0.199,
                },
                originalregistrationdate: {
                    value: "2009-12-06",
                },
                yearofmanufacture: {
                    value: "2010",
                },
                vpc: {
                    value: "",
                },
                enginecapacity: {
                    value: 1600,
                },
                classification: "C",
                nooftransfers: {
                    value: 1,
                },
                propellant: {
                    value: "Petrol",
                },
                co2emission: {
                    value: 145,
                },
                motorno: {
                    value: "",
                },
                minimumparfbenefit: {
                    value: 2500,
                },
                thcemission: {
                    value: 0.187765,
                },
                firstregistrationdate: {
                    value: "2010-06-06",
                },
                lastupdated: "2020-08-26",
                maximumunladenweight: {
                    value: 1500,
                },
                coecategory: {
                    value: "A - CAR UP TO 1600CC & 97KW (130BHP)",
                },
                maximumladenweight: {
                    value: 2000,
                },
                secondarycolour: {
                    value: "",
                },
                iulabelno: {
                    value: "",
                },
                quotapremium: {
                    value: 0,
                },
                status: {
                    code: "1",
                    desc: "LIVE",
                },
            },
        ];
        profile.edulevel = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "7",
            desc: "BACHELOR'S OR EQUIVALENT",
        };
        profile.occupation = {
            lastupdated: "2020-01-01",
            source: "1",
            classification: "C",
            code: "25121",
            desc: "SOFTWARE_DEVELOPER",
        };
        return profile;
    },
};
//# sourceMappingURL=mrsPRHdbOwnerWorkingAdult.js.map