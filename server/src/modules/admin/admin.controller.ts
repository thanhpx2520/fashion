import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
  Res,
  UseGuards,
  Query,
  Req,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthenAdmin } from 'src/auth/authen-admin.guard';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('login')
  @Render('admin/login')
  getLogin() {
    return this.adminService.getLogin();
  }

  @Post('login')
  @Redirect()
  postLogin(@Body() body: any, @Res({ passthrough: true }) res: FastifyReply) {
    return this.adminService.postLogin(body, res);
  }

  @Get('logout')
  @Redirect()
  logout(@Res({ passthrough: true }) res: FastifyReply) {
    return this.adminService.logout(res);
  }

  @Get('dashboard')
  @UseGuards(AuthenAdmin)
  @Render('admin/dashboard')
  getDashboard() {
    return this.adminService.getDashboard();
  }

  @Get('categories')
  @UseGuards(AuthenAdmin)
  @Render('admin/category/category')
  getAllCategories(@Query() query: any) {
    return this.adminService.getAllCategories(query);
  }

  @Get('categories/add')
  @UseGuards(AuthenAdmin)
  @Render('admin/category/add-category')
  getAddCategory() {
    return this.adminService.getAddCategory();
  }

  @Post('categories/add')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postAddCategory(
    @Body() body: any,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.adminService.postAddCategory(body, res);
  }

  @Get('categories/edit/:id')
  @UseGuards(AuthenAdmin)
  @Render('admin/category/edit-category')
  getCategoryById(@Param('id') id: string) {
    return this.adminService.getCategoryById(id);
  }

  @Post('categories/edit/:id')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postEditCategory(
    @Body() body: any,
    @Param('id') id: string,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.adminService.postEditCategory(body, res, id);
  }

  @Post('categories/delete/:id')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postDeleteCategory(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.adminService.postDeleteCategory(res, id);
  }

  @Get('comments')
  @UseGuards(AuthenAdmin)
  @Render('admin/comment/comment')
  getAllComments(@Query() query: any) {
    return this.adminService.getAllComments(query);
  }

  @Get('comments/edit/:id')
  @UseGuards(AuthenAdmin)
  @Render('admin/comment/edit-comment')
  getCommentById(@Param('id') id: string) {
    return this.adminService.getCommentById(id);
  }

  @Post('comments/edit/:id')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postEditComment(
    @Body() body: any,
    @Param('id') id: string,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.adminService.postEditComment(body, res, id);
  }

  @Post('comments/delete/:id')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postDeleteComment(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.adminService.postDeleteComment(res, id);
  }

  @Get('products')
  @UseGuards(AuthenAdmin)
  @Render('admin/product/product')
  getAllProducts(@Query() query: any) {
    return this.adminService.getAllProducts(query);
  }

  @Get('products/add')
  @UseGuards(AuthenAdmin)
  @Render('admin/product/add-product')
  getAddProduct() {
    return this.adminService.getAddProduct();
  }

  @Post('products/add')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postAddProduct(
    @Res({ passthrough: true }) res: FastifyReply,
    @Req() req: FastifyRequest,
  ) {
    return this.adminService.postAddProduct(req, res);
  }

  @Get('products/edit/:id')
  @UseGuards(AuthenAdmin)
  @Render('admin/product/edit-product')
  getProductById(@Param('id') id: string) {
    return this.adminService.getProductById(id);
  }

  @Post('products/edit/:id')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postEditProduct(
    @Res({ passthrough: true }) res: FastifyReply,
    @Param('id') id: string,
    @Req() req: FastifyRequest,
  ) {
    return this.adminService.postEditProduct(req, res, id);
  }

  @Post('products/delete/:id')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postDeleteProduct(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.adminService.postDeleteProduct(res, id);
  }

  @Get('sliders')
  @UseGuards(AuthenAdmin)
  @Render('admin/slider/slider')
  getAllSliders(@Query() query: any) {
    return this.adminService.getAllSliders(query);
  }

  @Get('sliders/add')
  @UseGuards(AuthenAdmin)
  @Render('admin/slider/add-slider')
  getAddSlider() {
    return this.adminService.getAddSlider();
  }

  @Post('sliders/add')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postAddSlider(
    @Res({ passthrough: true }) res: FastifyReply,
    @Req() req: FastifyRequest,
  ) {
    return this.adminService.postAddSlider(req, res);
  }

  @Get('sliders/edit/:id')
  @UseGuards(AuthenAdmin)
  @Render('admin/slider/edit-slider')
  getSliderById(@Param('id') id: string) {
    return this.adminService.getSliderById(id);
  }

  @Post('sliders/edit/:id')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postEditSlider(
    @Res({ passthrough: true }) res: FastifyReply,
    @Param('id') id: string,
    @Req() req: FastifyRequest,
  ) {
    return this.adminService.postEditSlider(req, res, id);
  }

  @Post('sliders/delete/:id')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postDeleteSlider(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.adminService.postDeleteSlider(res, id);
  }

  @Get('users')
  @UseGuards(AuthenAdmin)
  @Render('admin/user/user')
  getAllUsers(@Query() query: any) {
    return this.adminService.getAllUsers(query);
  }

  @Get('users/add')
  @UseGuards(AuthenAdmin)
  @Render('admin/user/add-user')
  getAddUser() {
    return this.adminService.getAddUser();
  }

  @Post('users/add')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postAddUser(
    @Body() body: any,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.adminService.postAddUser(body, res);
  }

  @Get('users/edit/:id')
  @UseGuards(AuthenAdmin)
  @Render('admin/user/edit-user')
  getUserById(@Param('id') id: string) {
    return this.adminService.getUserById(id);
  }

  @Post('users/edit/:id')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postEditUser(
    @Body() body: any,
    @Param('id') id: string,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.adminService.postEditUser(body, res, id);
  }

  @Post('users/delete/:id')
  @UseGuards(AuthenAdmin)
  @Redirect()
  postDeleteUser(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    return this.adminService.postDeleteUser(res, id);
  }
}
