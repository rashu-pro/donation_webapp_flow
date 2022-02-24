/**
 * Created by Rashu on 12-02-22.
 */

$(document).ready(function () {

    $('.donation-frequency-toggle input[type=checkbox]').change(function () {
        var self = $(this);
        console.log(self.val());
        if(self.is(':checked')){
            $('.donation-monthly-wrapper').hide('slow');
            $('.donation-one-time-wrapper').show('slow');
        }else{
            $('.donation-one-time-wrapper').hide('slow');
            $('.donation-monthly-wrapper').show('slow');
        }
    });

    $('.donation-monthly').on('click',function (e) {
        e.preventDefault();
        var self = $(this);
        if(!self.hasClass('active')){
            $('.donation-one-time').removeClass('active');
            self.addClass('active');
            $('.donation-one-time-wrapper').hide('slow');
            $('.donation-monthly-wrapper').show('slow');
        }
    });

    $('.donation-one-time').on('click',function (e) {
        e.preventDefault();
        var self = $(this);
        if(!self.hasClass('active')){
            $('.donation-monthly').removeClass('active');
            self.addClass('active');
            $('.donation-monthly-wrapper').hide('slow');
            $('.donation-one-time-wrapper').show('slow');
        }
    });


    $('.btn-next').on('click',function () {
        var self = $(this);
        self.closest('.flow-wrapper').removeClass('active');
        self.closest('.flow-wrapper').addClass('completed');
        if(self.closest('.flow-wrapper').find('.edit-btn').hasClass('hide')){
            self.closest('.flow-wrapper').find('.edit-btn').removeClass('hide');
        }
        if(self.closest('.flow-wrapper').next().hasClass('completed')){
            self.closest('.flow-wrapper').next().removeClass('completed');
            self.closest('.flow-wrapper').next().addClass('active');
        }else{
            self.closest('.flow-wrapper').next().addClass('active');
        }
    });

    $('.edit-btn').on('click',function () {
        var self = $(this);
        self.parent().addClass('show');
        self.parent().closest('.flow-wrapper').removeClass('completed').addClass('active');
        self.parent().closest('.flow-wrapper').nextAll().removeClass('active');

        if(self.parent().closest('.flow-wrapper').next().hasClass('completed')){
            self.parent().closest('.flow-wrapper').next().find('.edit-btn').addClass('hide');
        }

    });

    $('.btn-pay').on('click',function () {
        $('.loader-wrapper').addClass('active');
        setTimeout(function () {
            $('.loader-wrapper').removeClass('active');
            $('.main-wrapper-form-inner').addClass('hide');
            $('.thankyou-wrapper').addClass('d-flex');
        },2000);
    });

    $('.select-wrapper .drop-down-arrow').on('click',function () {
        $(this).closest('.select-wrapper').find('select').focus();
    });

    // $('.amount-option').on('click',function () {
    //     console.log($('input[name=donationAmountSelected]:checked').val());
    // });

    // $('.radio').change(function () {
    //     var self = $(this);
    //     console.log(self.val());
    //     if(self.val()=='other'){
    //         self.parent().hide();
    //         self.closest('.form-group').find('.donation-amount-other').show();
    //         self.closest('.form-group').find('.donation-amount-other .form-control').focus();
    //     }
    //
    // });

    $(document).on('change','.radio',function () {
        var self = $(this);
        console.log(self.val());
        self.parent().find('label').removeClass('selected');
        self.prev().addClass('selected');
        if(self.val()=='other'){
            self.prev().removeClass('selected');
            self.parent().hide();
            self.closest('.form-group').find('.donation-amount-other').show();
            self.closest('.form-group').find('.donation-amount-other .form-control').focus();
        }
    });

    $('.field-cleaner').on('click',function () {
        var self = $(this);
        var form_field_selector = self.closest('.input-group').find('.form-control');
        var form_value = form_field_selector.val();
        if(form_value==''){
            self.closest('.donation-amount-other').hide();
            self.closest('.form-group').find('.donation-amount-options-wrapper').show();
            self.closest('.form-group').find('.donation-amount-options-wrapper label:first-child').addClass('selected');

        }else{
            self.closest('.input-group').find('.form-control').val('');
        }

    });



});
