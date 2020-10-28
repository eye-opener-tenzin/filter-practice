function validUserNames(strings){
    return strings.filter(name => name.length < 10)
}
 console.log(validUserNames(['mark',  'staceysmom1987', 'q2983123267868768', 'carrie98', 'MoanaFan' ]))