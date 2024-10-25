$(document).ready(function () {
    /*
        Individual Column Search
    */

    // // Setup - add a text input to each footer cell
    // $("#individual-col-search tfoot th").each(function () {
    //     var title = $(this).text();
    //     $(this).html(
    //         '<input type="text" class="form-control" placeholder="Search ' +
    //             title +
    //             '" />'
    //     );
    // });

    // DataTable
    var table = $("#individual-col-search").DataTable({
        dom:
            "<'dt--top-section'<'row'<'col-12 col-sm-6 d-flex justify-content-center'l><'col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3'f>>>" +
            "<'table-responsive'tr>" +
            "<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
        oLanguage: {
            oPaginate: {
                sPrevious:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
                sNext: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
            },
            sInfo: "Showing page _PAGE_ of _PAGES_",
            sSearch:
                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
            sSearchPlaceholder: "Search...",
            sLengthMenu: "Results :  _MENU_",
        },
        stripeClasses: [],
        lengthMenu: [7, 10, 20, 50],
        pageLength: 7,
    });

    // Apply the search
    table.columns().every(function () {
        var that = this;

        $("input", this.footer()).on("keyup change", function () {
            if (that.search() !== this.value) {
                that.search(this.value).draw();
            }
        });
    });

    /*
        Show Hide column
    */

    var table = $("#show-hide-col-huffaz").DataTable({
        dom:
            // "<'dt--top-section'<'row'<'col-sm-12 col-md-12 d-flex justify-content-center'B><'col-sm-12 col-md-6 d-flex justify-content-md-end justify-content-center mt-md-0 mt-3'f>>>" +
            "<'dt--top-section'<'row'<'col-sm-12 col-md-12 d-flex justify-content-center align-items-center'B f>>>" +
            // "<'dt--top-section'<'row'<'col-sm-12 col-md-12 d-flex justify-content-between align-items-center flex-wrap'B f>>>" +

            "<'table-responsive'tr>" +
            "<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
        oLanguage: {
            oPaginate: {
                sPrevious:
                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
                sNext: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
            },
            sInfo: "Showing page _PAGE_ of _PAGES_",
            sSearch:
                '<svg xmlns="http://www.w3.org/2000/svg" width="24Search..." height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
            sSearchPlaceholder: "اسم،تخصص،دولة ..",
            sLengthMenu: "Results :  _MENU_",
        },
        buttons: [
            {
                text: "الاسم الرباعي",
                className: "btn btn-table-misce btn-available toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(0);
                    column.visible(!column.visible());
                },
            },
            {
                text: "الجنس",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(1);
                    column.visible(!column.visible());
                },
            },
            {
                text: "تاريخ الميلاد",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(2);
                    column.visible(!column.visible());
                },
            },
            {
                text: "الدولة",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(3);
                    column.visible(!column.visible());
                },
            },
            {
                text: "المدينة",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(4);
                    column.visible(!column.visible());
                },
            },
            {
                text: "القرية/الحي",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(5);
                    column.visible(!column.visible());
                },
            },
            {
                text: "التخصص العلمي",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(6);
                    column.visible(!column.visible());
                },
            },
            {
                text: "رقم الهاتف",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(7);
                    column.visible(!column.visible());
                },
            },
            {
                text: "مقدار الحفظ قبل الملتقى",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(8);
                    column.visible(!column.visible());
                },
            },

            {
                text: "كيف يسر الله لك الانضمام معنا",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(9);
                    column.visible(!column.visible());
                },
            },
            {
                text: "المحفظ",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(10);
                    column.visible(!column.visible());
                },
            },
            {
                text: "مدة الحفظ ",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(11);
                    column.visible(!column.visible());
                },
            },
            {
                text: "تاريخ الانضمام",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(12);
                    column.visible(!column.visible());
                },
            },
            {
                text: "تاريخ الختم",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(13);
                    column.visible(!column.visible());
                },
            },
            {
                text: "إجراءات",
                className: "btn btn-table-misce btn-available  toggle-vis mb-1",
                action: function (e, dt, node, config) {
                    var column = dt.column(14);
                    column.visible(!column.visible());
                },
            },
        ],
        stripeClasses: [],
        lengthMenu: [7, 10, 20, 50],
        pageLength: 7,

        createdRow: function (row, data, dataIndex) {
            $(
                'th:contains("حالة الطالب"), th:contains("رقم الهاتف"), th:contains("تاريخ الميلاد"), th:contains("التخصص العلمي"), th:contains("الجنس")'
            ).removeClass("sorting");
        },
        drawCallback: function (settings) {
            $(
                'th:contains("حالة الطالب"), th:contains("رقم الهاتف"), th:contains("تاريخ الميلاد"), th:contains("التخصص العلمي"),th:contains("الجنس")'
            ).removeClass("sorting");
        },
    });

    $(".toggle-vis").each(function () {
        $(this).attr("data-available", "true");
    });

    $(".toggle-vis").on("click", function () {
        var currentAvailable = $(this).attr("data-available") === "true";
        $(this).attr("data-available", !currentAvailable);

        if (currentAvailable) {
            $(this).removeClass("btn-available").addClass("btn-unavailable");
        } else {
            $(this).removeClass("btn-unavailable").addClass("btn-available");
        }
    });
});
