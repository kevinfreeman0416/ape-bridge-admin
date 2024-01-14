<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="冗余1" prop="extra1">
        <el-input
          v-model="queryParams.extra1"
          placeholder="请输入冗余1"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冗余2" prop="extra2">
        <el-input
          v-model="queryParams.extra2"
          placeholder="请输入冗余2"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冗余3" prop="extra3">
        <el-input
          v-model="queryParams.extra3"
          placeholder="请输入冗余3"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冗余4" prop="extra4">
        <el-input
          v-model="queryParams.extra4"
          placeholder="请输入冗余4"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冗余5" prop="extra5">
        <el-input
          v-model="queryParams.extra5"
          placeholder="请输入冗余5"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="发起人地址" prop="btcAddress">
        <el-input
          v-model="queryParams.btcAddress"
          placeholder="请输入发起人地址"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="avax账户地址" prop="avaxAddress">
        <el-input
          v-model="queryParams.avaxAddress"
          placeholder="请输入avax账户地址"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="跨链金额" prop="transferAmount">
        <el-input
          v-model="queryParams.transferAmount"
          placeholder="请输入跨链金额"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="跨链手续费" prop="handlingFee">
        <el-input
          v-model="queryParams.handlingFee"
          placeholder="请输入跨链手续费"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="实际转账金额" prop="actualTransferAmount">
        <el-input
          v-model="queryParams.actualTransferAmount"
          placeholder="请输入实际转账金额"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="avax交易区块" prop="avaxTransBlock">
        <el-input
          v-model="queryParams.avaxTransBlock"
          placeholder="请输入avax交易区块"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="avax交易hash" prop="avaxTx">
        <el-input
          v-model="queryParams.avaxTx"
          placeholder="请输入avax交易hash"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="btc交易区块" prop="btcTransBlock">
        <el-input
          v-model="queryParams.btcTransBlock"
          placeholder="请输入btc交易区块"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="btc交易hash" prop="btcTx">
        <el-input
          v-model="queryParams.btcTx"
          placeholder="请输入btc交易hash"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:btctoavaxorder:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:btctoavaxorder:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:btctoavaxorder:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:btctoavaxorder:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="btctoavaxorderList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" align="center" prop="id" />
      <el-table-column label="发起人地址" align="center" prop="btcAddress" />
      <el-table-column label="avax账户地址" align="center" prop="avaxAddress" />
      <el-table-column label="跨链金额" align="center" prop="transferAmount" />
      <el-table-column label="跨链手续费" align="center" prop="handlingFee" />
      <el-table-column label="实际转账金额" align="center" prop="actualTransferAmount" />
      <el-table-column label="avax交易区块" align="center" prop="avaxTransBlock" />
      <el-table-column label="avax交易hash" align="center" prop="avaxTx" />
      <el-table-column label="btc交易区块" align="center" prop="btcTransBlock" />
      <el-table-column label="btc交易hash" align="center" prop="btcTx" />
      <el-table-column label="跨链状态" align="center" prop="bridgeStatus" />
      <el-table-column label="冗余1" align="center" prop="extra1" />
      <el-table-column label="冗余2" align="center" prop="extra2" />
      <el-table-column label="冗余3" align="center" prop="extra3" />
      <el-table-column label="冗余4" align="center" prop="extra4" />
      <el-table-column label="冗余5" align="center" prop="extra5" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:btctoavaxorder:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:btctoavaxorder:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改btc跨链信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="发起人地址" prop="btcAddress">
          <el-input v-model="form.btcAddress" placeholder="请输入发起人地址" />
        </el-form-item>
        <el-form-item label="avax账户地址" prop="avaxAddress">
          <el-input v-model="form.avaxAddress" placeholder="请输入avax账户地址" />
        </el-form-item>
        <el-form-item label="跨链金额" prop="transferAmount">
          <el-input v-model="form.transferAmount" placeholder="请输入跨链金额" />
        </el-form-item>
        <el-form-item label="跨链手续费" prop="handlingFee">
          <el-input v-model="form.handlingFee" placeholder="请输入跨链手续费" />
        </el-form-item>
        <el-form-item label="实际转账金额" prop="actualTransferAmount">
          <el-input v-model="form.actualTransferAmount" placeholder="请输入实际转账金额" />
        </el-form-item>
        <el-form-item label="avax交易区块" prop="avaxTransBlock">
          <el-input v-model="form.avaxTransBlock" placeholder="请输入avax交易区块" />
        </el-form-item>
        <el-form-item label="avax交易hash" prop="avaxTx">
          <el-input v-model="form.avaxTx" placeholder="请输入avax交易hash" />
        </el-form-item>
        <el-form-item label="btc交易区块" prop="btcTransBlock">
          <el-input v-model="form.btcTransBlock" placeholder="请输入btc交易区块" />
        </el-form-item>
        <el-form-item label="btc交易hash" prop="btcTx">
          <el-input v-model="form.btcTx" placeholder="请输入btc交易hash" />
        </el-form-item>
        <el-form-item label="冗余1" prop="extra1">
          <el-input v-model="form.extra1" placeholder="请输入冗余1" />
        </el-form-item>
        <el-form-item label="冗余2" prop="extra2">
          <el-input v-model="form.extra2" placeholder="请输入冗余2" />
        </el-form-item>
        <el-form-item label="冗余3" prop="extra3">
          <el-input v-model="form.extra3" placeholder="请输入冗余3" />
        </el-form-item>
        <el-form-item label="冗余4" prop="extra4">
          <el-input v-model="form.extra4" placeholder="请输入冗余4" />
        </el-form-item>
        <el-form-item label="冗余5" prop="extra5">
          <el-input v-model="form.extra5" placeholder="请输入冗余5" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listBtctoavaxorder, getBtctoavaxorder, delBtctoavaxorder, addBtctoavaxorder, updateBtctoavaxorder } from "@/api/system/btctoavaxorder";

export default {
  name: "Btctoavaxorder",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // btc跨链信息表格数据
      btctoavaxorderList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        extra1: null,
        extra2: null,
        extra3: null,
        extra4: null,
        extra5: null,
        btcAddress: null,
        avaxAddress: null,
        transferAmount: null,
        handlingFee: null,
        actualTransferAmount: null,
        txid: null,
        blockTime: null,
        bridgeStatus: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        btcAddress: [
          { required: true, message: "发起人地址不能为空", trigger: "blur" }
        ],
        avaxAddress: [
          { required: true, message: "avax账户地址不能为空", trigger: "blur" }
        ],
        transferAmount: [
          { required: true, message: "跨链金额不能为空", trigger: "blur" }
        ],

      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询btc跨链信息列表 */
    getList() {
      this.loading = true;
      listBtctoavaxorder(this.queryParams).then(response => {
        this.btctoavaxorderList = response.rows;
        response.rows.forEach (row => {
          row.avaxAddress = row.btcToAvaxAddress.avaxAddress
        })
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        extra1: null,
        extra2: null,
        extra3: null,
        extra4: null,
        extra5: null,
        createTime: null,
        updateTime: null,
        btcAddress: null,
        avaxAddress: null,
        transferAmount: null,
        handlingFee: null,
        actualTransferAmount: null,
        avaxTransBlock: null,
        avaxTx: null,
        btcTransBlock: null,
        btcTx: null,
        bridgeStatus: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加btc跨链信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getBtctoavaxorder(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改btc跨链信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateBtctoavaxorder(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addBtctoavaxorder(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除btc跨链信息编号为"' + ids + '"的数据项？').then(function() {
        return delBtctoavaxorder(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/btctoavaxorder/export', {
        ...this.queryParams
      }, `btctoavaxorder_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
